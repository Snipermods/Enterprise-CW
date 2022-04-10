import express from 'express'
import userCommentsCtrl from '../controllers/userComments.controller'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()

router.route('/api/userComments')
  .get(authCtrl.requireSignin,  userCommentsCtrl.list)
  .post(authCtrl.requireSignin, userCommentsCtrl.create)







export default router
