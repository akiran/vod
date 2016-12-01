'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeIngredientSchema = new Schema({

  name: {
    type: String,
    required: true,
    unique: true
  },
  quantity: {
    type: Number,
    min: 0,
    required: true
  },
  unit: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('recipeIngredient', RecipeIngredientSchema);
