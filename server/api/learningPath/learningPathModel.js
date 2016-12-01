var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LearningPathSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  }
});

module.exports = mongoose.model('learningPath', LearningPathSchema);
