const Result = require('../models/Result');

const getResults = async (req, res) => {
  try {
    const results = await Result.find();
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getResultById = async (req, res) => {
  try {
    const result = await Result.findOne({ id: req.params.id });
    if (!result) return res.status(404).json({ message: 'Result record not found' });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createResult = async (req, res) => {
  try {
    const newResult = await Result.create(req.body);
    res.status(201).json(newResult);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateResult = async (req, res) => {
  try {
    const updatedResult = await Result.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updatedResult) return res.status(404).json({ message: 'Result record not found' });
    res.status(200).json(updatedResult);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteResult = async (req, res) => {
  try {
    const deletedResult = await Result.findOneAndDelete({ id: req.params.id });
    if (!deletedResult) return res.status(404).json({ message: 'Result record not found' });
    res.status(200).json({ message: 'Result record removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getResults,
  getResultById,
  createResult,
  updateResult,
  deleteResult
};
