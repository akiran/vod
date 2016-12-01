'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema ({
  name: {
    type: String,
    unique: true,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
});

module.exports = mongoose.model('category', CategorySchema);
