var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChefSchema = new Schema({
  name: {
    type: String,
    required: true
  }
  thumbnail: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  }
});

module.exports = mongoose.model('chef', ChefSchema);
