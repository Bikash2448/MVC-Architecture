import express from 'express';
const router = express.Router();
import commentRoutes from '../V1/comment.js'
import tweetsRoutes from '../V1/tweet.js'

router.use('/comments',commentRoutes)
router.use('/tweets',tweetsRoutes)

export default router;