import tweet from "../schema/tweet.js"


export const createTweet= async({body})=>{
    try{
        const Tweet = await tweet.create({body});
        return Tweet;
    }
    catch(error){
        throw error;
    }
}

export const getTweet= async()=>{
    try{
        const Tweet = await tweet.find();
        return Tweet;
    }
    catch(error){
        throw error;
    }
}
export const getTweetbyID = (id)=>{
    try{
        const Tweet = tweet.findById(id);
        return Tweet;
    }
    catch(error){
        throw error;
    }
}