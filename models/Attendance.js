const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  class: { type: String, required: true },
  status: { type: String, enum: ['Present', 'Absent', 'Late'], default: 'Present' },
  date: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Attendance', attendanceSchema);
