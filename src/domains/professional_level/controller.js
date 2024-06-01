const ProfessionalLevel = require("./model");

const createProfessionalLevel = async (data) => {
  const {name} = data;
  try {
    const professionalLevel = new ProfessionalLevel({
      name,
    });
    await professionalLevel.save();
    return professionalLevel;
  } catch (err) {
    throw err;
  }
};

const getAllProfessionalLevel = async () => {
  try {
    const professionalLevel = await ProfessionalLevel.find();
    return professionalLevel;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createProfessionalLevel,
  getAllProfessionalLevel,
};
