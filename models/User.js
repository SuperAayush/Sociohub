const mongoose = require("mongoose");

// THIS IS THE MONGOOSE SCHEMA FOR USERS
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 3,
      max: 20,
      unique: true,
      lowercase: true
    },
    name: {
      type:String,
      required: true},
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    followers: [],
    followings:[],
    posts:[]
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
