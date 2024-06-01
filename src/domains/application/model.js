const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
   },
   jobId: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
   },
  
  createdAt: { type: Date, default: Date.now() },
});

const Application = mongoose.model("Application", ApplicationSchema);

module.exports = Application;
