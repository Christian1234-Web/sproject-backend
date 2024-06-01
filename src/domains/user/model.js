const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  fullname: { type: String, required: true, unique: true },
  firstName: { type: String },
  lastName: { type: String },
  password: { type: String, required: true, select:false },
  emailVerification: { type: Boolean, default: false },
  email: { type: String, required: true, unique: true },
  dateOfBirth:{type:Date},
  phoneNumber: { type: Number, required: true},
  userType: { type: String, default: "user" },
  dateCreated: { type: Date, default: Date.now() },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
