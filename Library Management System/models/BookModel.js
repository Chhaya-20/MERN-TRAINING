//import mongoose from 'mongoose';
const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookSchema = new Schema({
  id: {
    type:Number,
    required:true
  },
  title: {
    type:String,
    required:true
  },
  author: {
    type:String,
    required:true,
    default:"new_author"
  },
  isBorrowed:
  {
    type: Boolean,
    required:true,
    default:false
  }
});

const Books = mongoose.model('Books', BookSchema);
module.exports = Books;