import express from 'express'
const router = express.Router();
import {getTweets , getTweetbyID, createTweet,DeleteTweet,updateTweet} from '../../controllers/tweetsControllers.js'
import {gettweetIdManualValidator} from '../../validators/tweetManualValidator.js'
import validate from '../../validators/zodValidators.js'
import { tweetZoodSchema } from '../../validators/tweetZodSchema.js';
import { s3Uploader } from '../../config/multerConfig.js';

router.get('/',getTweets)

router.get('/:id',gettweetIdManualValidator,getTweetbyID)

// router.post('/',tweetManualValiodator,createTweet)
router.post('/',s3Uploader.single('tweetImage'),validate(tweetZoodSchema),createTweet) 


router.delete('/:id',gettweetIdManualValidator,DeleteTweet)
router.put('/:id',gettweetIdManualValidator,updateTweet)

export default router;

