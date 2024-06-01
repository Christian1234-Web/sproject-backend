const Application = require("./model");

const createApplication = async (data) => {
  const { userId,jobId } = data;
  try {
    const alreadyApplied = await Application.find({userId});
    if(alreadyApplied.length >= 1) throw Error("You have already applied for this job");
    const application = new Application({
      userId,
      jobId
    })
      
    await application.save();
    return application;
  } catch (err) {
    throw err;
  }
};
const getAllApplication = async () => {
  try {
    const application = await Application.find();

    return application;
  } catch (err) {
    console.log(err);
  }
};

const getUserApplication = async (userId) => {
  try {
    const application = await Application.find({userId}).populate('jobId')
    return application;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createApplication,
  getAllApplication,
  getUserApplication
};
