import { createTweet as CT } from "../services/tweetService.js"
export function getTweets(req,res){
    return res.json({
        message: 'Welcome to the home page Biku',
    })
}

export function getTweetsID(req,res){
    return res.json({
        message: `Hello, World! from tweets ${req.params.id}`
    })
}

export async function createTweet(req,res){
    try{
        const response = await CT({
            body:req.body.body
        })
        return res.status(201).json({
            success:true,
            data:response,
            message: 'Tweet created successfully',
        })
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            message:"internal server error",
            success:false
        })
    }
}