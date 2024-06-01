const mongoose = require("mongoose");

const AssesmentSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
  answerOptions:{
    type:Array
  },
  createdAt: { type: Date, default: Date.now() },
});

const Assesment = mongoose.model("Assesment", AssesmentSchema);

module.exports = Assesment;
