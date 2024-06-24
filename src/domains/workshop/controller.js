const Workshop = require("./model");

const createWorkshop = async (data) => {
  const { image, tags, link, rate, title, description } = data;
  try {
    const workshop = new Workshop({
      image,
      tags,
      link,
      rate,
      title,
      description,
    });
    await workshop.save();
    return workshop;
  } catch (err) {
    throw err;
  }
};
const getAllWorkshop = async () => {
  try {
    const workshop = await Workshop.find();

    return workshop;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createWorkshop,
  getAllWorkshop,
};
