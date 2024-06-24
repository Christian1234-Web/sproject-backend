const Job = require("./model");

const createJob = async (data) => {
  const { image, tags, about, requirement, title, location ,deadline,workType,company,jobType,professionalLevel} = data;
  try {
    const job = new Job({
      image,
      tags,
      deadline,
      workType,
      about,
      title,
      requirement,
      location,
      company,
      jobType,
      professionalLevel
    });
    await job.save();
    return job;
  } catch (err) {
    throw err;
  }
};
const getAllJob = async () => {
  try {
    const job = await Job.find();

    return job;
  } catch (err) {
    console.log(err);
  }
};

const getSingleJob = async () => {
  try {
    const job = await Job.findOne({_id});

    return job;
  } catch (err) {
    console.log(err);
  }
};
// update user
const updateJob = async (jobId, data) => {
  try {
    const job = await Job.updateOne({ _id: jobId }, data);
    return job;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createJob,
  getAllJob,
  getSingleJob,
  updateJob
};
