import mongoose from 'mongoose'
import crypto from 'crypto'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Name is required'
  },
  userComment: {
    type: String,
    trim: true,
  },
  timestamp: {
      type : Date,
      trim : true //removes whitespace
  }
})


const userModel = mongoose.model('User', UserSchema);
userModel.createIndexes();
export default userModel
