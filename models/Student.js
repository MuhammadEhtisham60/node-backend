const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  fatherName: { type: String, default: "" },
  rollNo: { type: String, default: "" },
  dob: { type: String, default: "" },
  gender: { type: String, default: "" },
  cnic: { type: String, default: "" },
  profilePhoto: { type: String, default: "" },
  
  // Academic
  class: { type: String, default: "" },
  section: { type: String, default: "" },
  prevSchool: { type: String, default: "" },
  lastResult: { type: String, default: "" },
  admissionDate: { type: String, default: "" },
  
  // Contact
  mobile: { type: String, default: "" },
  altContact: { type: String, default: "" },
  email: { type: String, default: "" },
  city: { type: String, default: "" },
  address: { type: String, default: "" },
  
  // Guardian
  fatherFullName: { type: String, default: "" },
  fatherCNIC: { type: String, default: "" },
  occupation: { type: String, default: "" },
  fatherPhone: { type: String, default: "" },
  motherName: { type: String, default: "" },
  motherPhone: { type: String, default: "" },
  
  // Health
  blood: { type: String, default: "" },
  emergency: { type: String, default: "" },
  medical: { type: String, default: "" },
  disability: { type: String, default: "" },
  
  // Transport & Hostel
  transport: { type: Boolean, default: false },
  busRoute: { type: String, default: "" },
  hostel: { type: Boolean, default: false },
  
  // Documents
  documents: [{
    title: String,
    url: String,
    uploadedAt: { type: Date, default: Date.now }
  }],

  status: { type: String, default: "Active" },
  feeStatus: { type: String, default: "Pending" }
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
