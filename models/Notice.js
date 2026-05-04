const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  date: { type: String },
  category: { type: String, enum: ['Event', 'Meeting', 'Academic', 'Notice'], default: 'Notice' },
  body: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Notice', noticeSchema);
