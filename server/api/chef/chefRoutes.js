const chefRouter = require('express').Router();
const chefModel = require('./chefModel');
const logger = require('../../util/logger');
var authMiddleware = require('../../middleware/authMiddleware');



chefRouter.get('/', authMiddleware.checkUser, authMiddleware.checkAdmin, function(req, res) {
  chefModel.find({}, function(err, categories) {
    if (err) {
      return res.status(403).send(err);
    }
    // object of all the recipes
    res.status(200).send(categories);
  });
});

chefRouter.get('/:id', authMiddleware.checkUser, authMiddleware.checkAdmin, function(req, res) {
  chefModel.findById(req.params.id, function(err, chef) {
    if (err) {
      return res.status(403).send(err);
    }

    res.status(200).send(chef);
  });
});

chefRouter.post('/', authMiddleware.checkUser, authMiddleware.checkAdmin, function(req, res) {
  let chef = req.body;
  chef.userId: req.currentUser._id

  let newChefModel = chefModel(chef);

  // save the user
  newChefModel.save(function(err) {
    if (err) res.status(403).send(err);

    res.status(200).send(chef);
  });
});

chefRouter.put('/:id', authMiddleware.checkUser, authMiddleware.checkAdmin, function(req, res) {

  chefModel.findOneAndUpdate({_id:req.params.id}, req.body, function (err, chef) {
    if (err) {
      return res.status(403).send(err);
    }

    res.status(200).send(chef);
  });
});

chefRouter.delete('/:id', authMiddleware.checkUser, authMiddleware.checkAdmin, function(req, res) {

  chefModel.findById(req.params.id, function(err, chef) {
    if (err) throw err;

    chef.remove(function(err) {
      if (err) {
        return res.status(403).send(err);
      }

      res.status(200).send({});
    });
  });
});

module.exports = chefRouter;
