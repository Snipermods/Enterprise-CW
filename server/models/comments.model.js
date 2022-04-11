import mongoose from 'mongoose'
import crypto from 'crypto'


const commentsSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true

  },
  comment: {
    type: String,
    trim: true

  },
  userid:{
    type: String,
    trim: true
  }
})

const commentsModel = mongoose.model('comments', commentsSchema);
commentsModel.createIndexes();
export default commentsModel