const Assesment = require("./model");

const createAssesment = async (data) => {
  const {title,question,options,answerOptions} = data;
  try {
    const assesment = new Assesment({
      question,
      title,
      options,
      answerOptions
    });
    await assesment.save();
    return assesment;
  } catch (err) {
    throw err;
  }
};

const getAllAssesment = async () => {
  try {
    const assesment = await Assesment.find();
    return assesment;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createAssesment,
  getAllAssesment,
};
