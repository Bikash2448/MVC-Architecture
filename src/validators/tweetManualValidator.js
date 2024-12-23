// export const tweetManualValiodator = (req,res,next)=>{
//     if(!req.body.tweet){
//         return res.status(400).json({error: 'Please enter a tweet.'})
//     }

//     next()
// }
import {mongoose} from "mongoose"


export const gettweetIdManualValidator = (req, res, next) => {
    const isValid = mongoose.Types.ObjectId.isValid(req.params.id)
    if(!isValid){
        return res.status(400).json({error: 'Invalid tweet id.'})
    }
    next()

}