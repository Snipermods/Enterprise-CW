import UserComments from '../models/userComments.model'
import extend from 'lodash/extend'
import errorHandler from './../helpers/dbErrorHandler'
import userComments from '../models/userComments.model'

const create = async (req, res) => {
  const UserComments = new userComments(req.body)
  try {
    await UserComments.save()
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
    let users = await User.find().select('name email updated created')
    res.json(users)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}



const read = (req, res) => {
  
  return res.json(req.profile)
}





export default {
  create,
  userByID,
  read,
  list,
  listadmin,
  remove,
  update
}
