import { Filter } from "bad-words"

import { createTweet as ct } from "../repositories/tweetRepository.js";

export const createTweet = async ({body})=>{
    const filter = new Filter();
    if(filter.isProfane(body)){
        console.log(body)
        console.log(filter.clean(body))
        throw new Error("Tweets contains bad words")
    }

    const tweet = await ct({body});
    return tweet;
}