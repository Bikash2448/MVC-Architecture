import express from 'express'
// import tweetRouter from './V1/tweet.js'
// import commentRoute from './V1/comment.js'
import v1Routes from './V1/v1Routs.js'
import v2Routes from './V2/v2Routs.js'
const router = express.Router();

router.use('/v1',v1Routes)
router.use('/v2',v2Routes)

// router.use('/tweets',tweetRouter)
// router.use('/comments',commentRoute)

export default router;