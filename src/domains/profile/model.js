const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  resume: { type: String, default: "" },
  linkedIn: { type: String, default: "" },
  country: { type: String, default: "" },
  state: { type: String, default: "" },
  profession: { type: String, default: "" },
  skills: { type: String, default: "" },
  profilePic: { type: String, default: "" },
  jobType: { type: String, default: "" },
  professionalLevel: { type: String ,default:""},
  experience: { type: String, default: "" },
  currencey: { type: String, default: "" },
  frequency: { type: String, default: "" },
  rate: { type: String, default: "" },
  linkedIn: { type: String, default: "" },
  experienceArray: { type: Array, default: null },
  educationArray: { type: Array, default: null },
  certificateFile: { type: String, default: "" },
  certificateTitle: { type: String, default: "" },
  isStepOneComplete:{type:Boolean,default:false},
  isStepTwoComplete:{type:Boolean,default:false},
  isStepThreeComplete:{type:Boolean,default:false},
  isStepFourComplete:{type:Boolean,default:false},
  isStepFiveComplete:{type:Boolean,default:false},

  createdAt: { type: Date, default: Date.now() },
});

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;
