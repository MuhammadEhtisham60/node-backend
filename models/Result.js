const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  student: { type: String, required: true },
  class: { type: String },
  exam: { type: String },
  marks: { type: Number },
  total: { type: Number },
  grade: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Result', resultSchema);
