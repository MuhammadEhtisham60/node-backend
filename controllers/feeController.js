const Fee = require('../models/Fee');

const getFees = async (req, res) => {
  try {
    const fees = await Fee.find();
    res.status(200).json(fees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getFeeById = async (req, res) => {
  try {
    const fee = await Fee.findOne({ id: req.params.id });
    if (!fee) return res.status(404).json({ message: 'Fee record not found' });
    res.status(200).json(fee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createFee = async (req, res) => {
  try {
    const newFee = await Fee.create(req.body);
    res.status(201).json(newFee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateFee = async (req, res) => {
  try {
    const updatedFee = await Fee.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updatedFee) return res.status(404).json({ message: 'Fee record not found' });
    res.status(200).json(updatedFee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteFee = async (req, res) => {
  try {
    const deletedFee = await Fee.findOneAndDelete({ id: req.params.id });
    if (!deletedFee) return res.status(404).json({ message: 'Fee record not found' });
    res.status(200).json({ message: 'Fee record removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getFees,
  getFeeById,
  createFee,
  updateFee,
  deleteFee
};
