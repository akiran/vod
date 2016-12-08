'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSkillLearntSchema = new Schema({

  name: {
    type: String,
    required: true, // check if is always required
    unique: true
  }

});

module.exports = mongoose.model('recipeSkillLearnt', RecipeSkillLearntSchema);
