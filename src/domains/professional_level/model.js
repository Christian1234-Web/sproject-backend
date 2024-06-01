const mongoose = require("mongoose");

const ProfessionLevelSchema = new mongoose.Schema({
    name: { 
        type: String,
       },
  createdAt: { type: Date, default: Date.now() },
});


const ProfessionLevel = mongoose.model("ProfessionLevel", ProfessionLevelSchema);

module.exports = ProfessionLevel;
