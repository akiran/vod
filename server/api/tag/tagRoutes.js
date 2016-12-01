const tagRouter = require('express').Router();
const tagModel = require('./tagModel');
const logger = require('../../util/logger');
var authMiddleware = require('../../middleware/authMiddleware');


tagRouter.get('/', authMiddleware.checkUser, authMiddleware.checkAdmin, function(req, res) {
  tagModel.find({}, function(err, tags) {
    if (err) {
      return res.status(403).send(err);
    }
    // object of all the recipes
    res.status(200).send(tags);
  });
});

tagRouter.get('/:id', authMiddleware.checkUser, authMiddleware.checkAdmin, function(req, res) {
  tagModel.findById(req.params.id, function(err, tag) {
    if (err) {
      return res.status(403).send(err);
    }

    res.status(200).send(tag);
  });
});

tagRouter.post('/', authMiddleware.checkUser, authMiddleware.checkAdmin, function(req, res) {
  let tag = req.body;
  tag.userId: req.currentUser._id;
  let newTagModel = tagModel({tag);

  // save the user
  newTagModel.save(function(err) {
    if (err) res.status(403).send(err);

    res.status(200).send(tag);
  });
});

tagRouter.put('/:id', authMiddleware.checkUser, authMiddleware.checkAdmin, function(req, res) {
  tagModel.findOneAndUpdate({_id:req.params.id}, req.body, function (err, tag) {
    if (err) {
      return res.status(403).send(err);
    }

    res.status(200).send(tag);
  });
});

tagRouter.delete('/:id', authMiddleware.checkUser, authMiddleware.checkAdmin, function(req, res) {

  tagModel.findById(req.params.id, function(err, tag) {
    if (err) throw err;

    tag.remove(function(err) {
      if (err) {
        return res.status(403).send(err);
      }

      res.status(200).send({});
    });
  });
});

module.exports = tagRouter;
