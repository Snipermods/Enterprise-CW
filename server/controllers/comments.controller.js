
import extend from 'lodash/extend'
import errorHandler from './../helpers/dbErrorHandler'
import comments from '../models/comments.model'

const create = async (req, res) => {
  const Comments = new comments(req.body)
  try {
    await Comments.save()
    return res.status(200).json({
      message: "User Comments has been Created Succesfully!"
    })
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const list = async (req, res) => {
  try {
    let Comments = await comments.find().select('name comment _id')
    res.json(Comments)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
}

}
  
const remove = async (req, res) => {
  
  try {
    let comment = req.comment
    let commentDelete = await comment.remove
    res.json(commentDelete)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const commentByID = async (req, res, next, id) => {
  try {
    let comment = await comments.findById(id)
    if (!comment)
      return res.status('400').json({
        error: "comment not found"
      })
    req.comment = comment
    next()
  } catch (err) {
    return res.status('400').json({
      error: "Could not retrieve comment"
    })
  }
}
    

export default {
  create,
  list,
  remove,
  commentByID

}