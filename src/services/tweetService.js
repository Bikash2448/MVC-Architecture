import { Filter } from "bad-words"

import { createTweet as ct,getTweet as gt, getTweetbyID as gti, deleteTweet ,updateTweet as uti} from "../repositories/tweetRepository.js";

export const createTweet = async ({body,image})=>{
    const filter = new Filter();
    if(filter.isProfane(body)){
        console.log(body)
        console.log(filter.clean(body))
        throw new Error("Tweets contains bad words")
    }

    const tweet = await ct({body,image});
    return tweet;
}

export const getTweets = async ()=>{
    const tweets = await gt();
    return tweets;
}

export async function getTweetbyID(id){
    const tweet = await gti(id);
    return tweet;
}

export const deleteTweetbyId = async(id)=>{
    const response = await deleteTweet(id);
    if(!response){
        throw{
            message:'Tweet not found',
            code:404
        }
    }
    return response;
}

export const updateTweet = async(id, body)=>{
    console.log('service layer',body)
    const tweet = await uti(id,body);
    // console.log("....",tweet)
    return tweet;
}