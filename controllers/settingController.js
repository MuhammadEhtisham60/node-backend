const Setting = require('../models/Setting');

const getSettings = async (req, res) => {
  try {
    let setting = await Setting.findOne();
    if (!setting) {
      setting = await Setting.create({
        schoolName: 'Scholaris Public School',
        email: 'contact@scholaris.edu',
        phone: '+1 (555) 123-4567',
        address: '221B Baker Street, London'
      });
    }
    res.status(200).json(setting);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSettings = async (req, res) => {
  try {
    const updatedSetting = await Setting.findOneAndUpdate(
      {},
      req.body,
      { new: true, upsert: true }
    );
    res.status(200).json(updatedSetting);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getSettings,
  updateSettings
};
