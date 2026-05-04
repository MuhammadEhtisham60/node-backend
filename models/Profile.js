const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  address: { type: String },
  bio: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Profile', profileSchema);
