const mongoose = require("mongoose");

const WorkshopSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  rate: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now() },
});

const Workshop = mongoose.model("Workshop", WorkshopSchema);

module.exports = Workshop;
