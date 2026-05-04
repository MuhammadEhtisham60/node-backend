const Profile = require('../models/Profile');

const getProfile = async (req, res) => {
  try {
    let profile = await Profile.findOne();
    if (!profile) {
      // Create a default profile if none exists
      profile = await Profile.create({
        name: "Admin User",
        role: "Principal",
        email: "admin@scholaris.edu",
        phone: "+1 (555) 234-5678",
        address: "221B Baker Street, London",
        bio: "Leading Scholaris Public School with a focus on academic excellence and student wellbeing."
      });
    }
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProfile = async (req, res) => {
  try {
    const updatedProfile = await Profile.findOneAndUpdate(
      {}, // empty filter to find the first one
      req.body,
      { new: true, upsert: true } // upsert true just in case
    );
    res.status(200).json(updatedProfile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProfile,
  updateProfile
};
