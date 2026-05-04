const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  class: { type: String, default: "" },
  section: { type: String, default: "" },
  gender: { type: String, default: "Male" },
  parent: { type: String, default: "" },
  phone: { type: String, default: "" },
  status: { type: String, default: "Active" }
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
