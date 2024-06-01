const mongoose = require("mongoose");

const JobTypeSchema = new mongoose.Schema({
    name: { 
        type:String,
       },
  createdAt: { type: Date, default: Date.now() },
});


const JobType = mongoose.model("JobType", JobTypeSchema);

module.exports = JobType;
