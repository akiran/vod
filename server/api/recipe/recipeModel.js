'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RecipeSchema = Schema ({
  title: {
    type: String,
    unique: true,
    required: true
  },
  slug: {
    type: String,
    unique: true,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  categories: [{
    type: Schema.Types.ObjectId,
    ref: 'category'
  }],
  tags: [{
    type: Schema.Types.ObjectId,
    ref: 'tag'
  }],
  learningPath: [{
    type: Schema.Types.ObjectId,
    ref: 'learningPath',
    required: true
  }],
  courseType: {
    type: String,
    required: true,
    enum: ['starter' , 'main', 'dessert', 'snack', 'drink', 'cocktail']
  },
  pictureIngredients: {
    type: String,
    required: true
  },
  picturePlating: {
    type: String,
    required: true
  },
  videoThumbnail: {
    type: String,
    required: true
  },
  videoPreview: {
    type: String,
    required: true
  },
  videoFull: {
    type: String,
    required: true
  },
  length: {
    type: Number,
    min: 0,
    default:0
  },
  difficulty: {
    type: String,
    required: true,
    enum: ['easy' , 'easy-medium', 'medium', 'medium-hard', 'hard']
  },
  servings: {
    type: Number,
    min: 1
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'chef',
    required: true
  },
  ingredients: [{
    type: Schema.Types.ObjectId,
    ref: 'recipeIngredient',
    required: true
  }],
  steps: [{
    type: Schema.Types.ObjectId,
    ref: 'recipeStep',
    required: true
  }],
  price: {
    type: Number,
    min: 0,
    default:0
  }
  equipment: [{
    type: Schema.Types.ObjectId,
    ref: 'recipeEquipment',
    required: true
  }],
  skillsLearnt: [{
    type: Schema.Types.ObjectId,
    ref: 'recipeSkillLearnt',
    required: true
  }],
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'comment',
  }],
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  created: {
    type: Date,
    required: true
  }
})

module.exports = mongoose.model('recipe', RecipeSchema)
