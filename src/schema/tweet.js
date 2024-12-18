import mongoose from 'mongoose'

const tweetSchema = new mongoose.Schema({
    body:{
        type: String,
        required: true,
        trim:true,
        maxlength:280
    }

})

const tweet = mongoose.model("tweet",tweetSchema)
export default tweet;