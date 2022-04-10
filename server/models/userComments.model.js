import mongoose from 'mongoose'
import crypto from 'crypto'

const UserComments = new mongoose.Schema({
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


const userComments = mongoose.model('userComments', UserComments);
userComments.model.createIndexes();
export default userComments
