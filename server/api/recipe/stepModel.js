'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StepSchema = new Schema({

  picture: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tip: {
    type: String
  }
});

module.exports = mongoose.model('recipeStep', StepSchema);
