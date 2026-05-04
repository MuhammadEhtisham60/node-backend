const mongoose = require('mongoose');

const settingSchema = new mongoose.Schema({
  schoolName: { type: String, default: 'Scholaris Public School' },
  email: { type: String, default: 'contact@scholaris.edu' },
  phone: { type: String, default: '+1 (555) 123-4567' },
  address: { type: String, default: '221B Baker Street, London' }
}, { timestamps: true });

module.exports = mongoose.model('Setting', settingSchema);
