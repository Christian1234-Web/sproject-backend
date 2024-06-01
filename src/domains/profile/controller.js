const Profile = require("./model");

const createProfile = async (data) => {
  try{
    const profile = new Profile(data);

    await profile.save();
    return Profile;
  } catch (err) {
    throw err;
  }
}

const getAllProfile = async () => {
  try {
    const Profile = await Profile.find();
    return Profile;
  } catch (err) {
    console.log(err);
  }
};

const getUserProfile = async (userId) => {
  try {
    const profile = await Profile.findOne({userId})
    return profile;
  } catch (err) {
    console.log(err);
  }
};
const updateProfile = async (profileId, data) => {
  try {
    const profile = await Profile.updateOne({ _id: profileId }, data);
    if (!profile) {
      throw new Error('Profile not found');
    }
    return profile;
  } catch (err) {
    console.error('Error updating profile:', err);
    throw err; // Rethrow the error to be caught by the caller
  }
};


module.exports = {
  createProfile,
  getAllProfile,
  getUserProfile,
  updateProfile
};
