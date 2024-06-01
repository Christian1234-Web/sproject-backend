const JobType = require("./model");

const createJobType = async (data) => {
  const {name} = data;
  try {
    const jobType = new JobType({
      name,
    });
    await jobType.save();
    return jobType;
  } catch (err) {
    throw err;
  }
};

const getAllJobType = async () => {
  try {
    const jobType = await JobType.find();
    return jobType;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createJobType,
  getAllJobType,
};
