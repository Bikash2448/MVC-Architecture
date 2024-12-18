import express from 'express'
const router = express.Router();
import {getTweets , getTweetsID, createTweet} from '../../controllers/tweetsControllers.js'
// import {tweetManualValiodator} from '../../validators/tweetManualValidator.js'
import validate from '../../validators/zodValidators.js'
import { tweetZoodSchema } from '../../validators/tweetZodSchema.js';

router.get('/',getTweets)

router.get('/:id',getTweetsID)

// router.post('/',tweetManualValiodator,createTweet)
router.post('/',validate(tweetZoodSchema),createTweet) 

export default router;