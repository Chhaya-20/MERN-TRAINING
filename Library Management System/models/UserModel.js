//import mongoose from 'mongoose';
const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  bookid: {
    type: Number,
  },
});

const Users = mongoose.model("Users", UserSchema);
module.exports = Users;
