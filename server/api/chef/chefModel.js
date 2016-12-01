const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChefSchema = new Schema({
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
