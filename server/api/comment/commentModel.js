var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  text: {
    type: String,
    required: true
  }
  created: {
    type: Number,
    required: true
  },
  recipeId: {
    type: Schema.Types.ObjectId,
    ref: 'recipe',
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  }
});

module.exports = mongoose.model('comment', CommentSchema);
