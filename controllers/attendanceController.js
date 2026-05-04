const Attendance = require('../models/Attendance');

const getAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find();
    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAttendanceById = async (req, res) => {
  try {
    const attendance = await Attendance.findOne({ id: req.params.id });
    if (!attendance) return res.status(404).json({ message: 'Attendance record not found' });
    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createAttendance = async (req, res) => {
  try {
    const newAttendance = await Attendance.create(req.body);
    res.status(201).json(newAttendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateAttendance = async (req, res) => {
  try {
    const updatedAttendance = await Attendance.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updatedAttendance) return res.status(404).json({ message: 'Attendance record not found' });
    res.status(200).json(updatedAttendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteAttendance = async (req, res) => {
  try {
    const deletedAttendance = await Attendance.findOneAndDelete({ id: req.params.id });
    if (!deletedAttendance) return res.status(404).json({ message: 'Attendance record not found' });
    res.status(200).json({ message: 'Attendance record removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAttendance,
  getAttendanceById,
  createAttendance,
  updateAttendance,
  deleteAttendance
};
