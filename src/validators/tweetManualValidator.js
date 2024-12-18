export const tweetManualValiodator = (req,res,next)=>{
    if(!req.body.tweet){
        return res.status(400).json({error: 'Please enter a tweet.'})
    }

    next()
}