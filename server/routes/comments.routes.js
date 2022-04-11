import express from 'express'
import commentsCtrl from '../controllers/comments.controller'
import authCtrl from '../controllers/auth.controller'
import userCtrl from '../controllers/user.controller'

const router = express.Router()

router.route('/api/comments')
  .get(commentsCtrl.list)
  .post(commentsCtrl.create)

  //authCtrl.requireSignin,

router.route('/api/commentid/:userid/:commentid')
  

  .delete(authCtrl.requireSignin,authCtrl.hasAuthorization, commentsCtrl.remove)


router.param('userid', userCtrl.userByID)
router.param('commentid', commentsCtrl.commentByID)

export default router