import mongoose from 'mongoose'
import crypto from 'crypto'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Name is required'
  },
  email: {
    index: true,
    type: String,
    trim: true,
    unique: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    required: 'Email is required'
  },
  about: {
    type: String,
    trim: true,
  },
  profileclicks: {
    type: Number,
    default: 0,
    min: 0,
  },
  admin: {
  	type: Boolean,
  	default: false
  },
  hashed_password: {
    type: String,
    required: "Password is required"
  },
  salt: String,
  updated: Date,
    created: {
      type: Date,
      default: Date.now
    }
})



const userModel = mongoose.model('User', UserSchema);
userModel.createIndexes();
export default userModel
