const Notice = require('../models/Notice');

const getNotices = async (req, res) => {
  try {
    const notices = await Notice.find();
    res.status(200).json(notices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getNoticeById = async (req, res) => {
  try {
    const notice = await Notice.findOne({ id: req.params.id });
    if (!notice) return res.status(404).json({ message: 'Notice not found' });
    res.status(200).json(notice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createNotice = async (req, res) => {
  try {
    const newNotice = await Notice.create(req.body);
    res.status(201).json(newNotice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateNotice = async (req, res) => {
  try {
    const updatedNotice = await Notice.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updatedNotice) return res.status(404).json({ message: 'Notice not found' });
    res.status(200).json(updatedNotice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteNotice = async (req, res) => {
  try {
    const deletedNotice = await Notice.findOneAndDelete({ id: req.params.id });
    if (!deletedNotice) return res.status(404).json({ message: 'Notice not found' });
    res.status(200).json({ message: 'Notice removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getNotices,
  getNoticeById,
  createNotice,
  updateNotice,
  deleteNotice
};
