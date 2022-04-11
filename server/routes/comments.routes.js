import express from 'express'
import commentsCtrl from '../controllers/comments.controller'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()

router.route('/api/comments')
  .get( commentsCtrl.list)
  .post(commentsCtrl.create)

  //authCtrl.requireSignin





export default router