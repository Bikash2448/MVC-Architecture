import express from 'express'
const router = express.Router()
import commentRoutes from './comment.js'
import tweetsRoutes from './tweet.js'


router.use('/comment',commentRoutes)
router.use('/tweets',tweetsRoutes)


export default router;