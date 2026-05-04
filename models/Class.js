const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  sections: [{ type: String }],
  teacher: { type: String },
  students: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Class', classSchema);
