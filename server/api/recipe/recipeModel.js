var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecipeSchema = new Schema({
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
  tags: {
    type: Array,
    required: true
  },
  learningPaths: {
    type: Array,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    required: true
  },
  finalPicture: {
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
  difficulty: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'chef',
    required: true
  },
  ingredients: {
    type: Array
  },
  steps: {
    type: Array
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  }
});


module.exports = mongoose.model('recipe', RecipeSchema);
