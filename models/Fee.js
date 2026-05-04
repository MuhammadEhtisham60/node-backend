const mongoose = require('mongoose');

const feeSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  student: { type: String, required: true },
  class: { type: String },
  amount: { type: Number, required: true },
  dueDate: { type: String },
  status: { type: String, enum: ['Paid', 'Unpaid'], default: 'Unpaid' }
}, { timestamps: true });

module.exports = mongoose.model('Fee', feeSchema);
