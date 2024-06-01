const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
    default:null
  },
  requirement: {
    type: Array,
    required: true,
  },
  tags: {
    type: Array,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  workType: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
    default:null
  },
  professionalLevel: {
    type: String,
    required: true,
    default:null
  },
  createdAt: { type: Date, default: Date.now() },
});

const Job = mongoose.model("Job", JobSchema);

module.exports = Job;
