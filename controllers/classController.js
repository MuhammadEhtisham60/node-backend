const Class = require('../models/Class');

const getClasses = async (req, res) => {
  try {
    const classes = await Class.find();
    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getClassById = async (req, res) => {
  try {
    const classItem = await Class.findOne({ id: req.params.id });
    if (!classItem) return res.status(404).json({ message: 'Class not found' });
    res.status(200).json(classItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createClass = async (req, res) => {
  try {
    const newClass = await Class.create(req.body);
    res.status(201).json(newClass);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateClass = async (req, res) => {
  try {
    const updatedClass = await Class.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updatedClass) return res.status(404).json({ message: 'Class not found' });
    res.status(200).json(updatedClass);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteClass = async (req, res) => {
  try {
    const deletedClass = await Class.findOneAndDelete({ id: req.params.id });
    if (!deletedClass) return res.status(404).json({ message: 'Class not found' });
    res.status(200).json({ message: 'Class removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getClasses,
  getClassById,
  createClass,
  updateClass,
  deleteClass
};
