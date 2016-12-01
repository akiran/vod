var commentRouter = require('express').Router();
var commentModel = require('./commentModel');
var logger = require('../../util/logger');
var authMiddleware = require('../../middleware/authMiddleware');



commentRouter.get('/', authMiddleware.checkUser, function(req, res) {
  commentModel.find({}, function(err, categories) {
    if (err) {
      return res.status(403).send(err);
    }
    // object of all the recipes
    res.status(200).send(categories);
  });
});

commentRouter.get('/:id', authMiddleware.checkUser, function(req, res) {
  commentModel.findById(req.params.id, function(err, comment) {
    if (err) {
      return res.status(403).send(err);
    }

    res.status(200).send(comment);
  });
});

commentRouter.post('/', authMiddleware.checkUser, function(req, res) {
  var comment = req.body;
  comment.created = Date.now();
  comment.userId = req.currentUser._id;

  var newCommentModel = commentModel(comment);

  newCommentModel.save(function(err) {
    if (err) res.status(403).send(err);

    res.status(200).send(comment);
  });
});

commentRouter.put('/:id', authMiddleware.checkUser, authMiddleware.checkAdmin, function(req, res) {

  commentModel.findOneAndUpdate({_id:req.params.id}, req.body, function (err, comment) {
      if (err) {
        return res.status(403).send(err);
      }

      res.status(200).send(comment);
    });
});

commentRouter.delete('/:id', authMiddleware.checkUser, authMiddleware.checkAdmin, function(req, res) {

  commentModel.findById(req.params.id, function(err, comment) {
    if (err) throw err;

    comment.remove(function(err) {
      if (err) {
        return res.status(403).send(err);
      }

      res.status(200).send({});
    });
  });
});

module.exports = commentRouter;
