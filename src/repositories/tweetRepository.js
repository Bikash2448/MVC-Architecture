import tweet from "../schema/tweet.js"


export const createTweet= async({body,image})=>{
    try{
        const Tweet = await tweet.create({body,image});
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

export const deleteTweet= async(id)=>{
    try{
        const Tweet = await tweet.findByIdAndDelete(id);
        return Tweet;
    }
    catch(e){
        throw e;
    }
}

export const updateTweet = async(id, body)=>{
    console.log("repolayer",body,id)
    try{
        const Tweet = await tweet.findByIdAndUpdate(id, {body}, {new: true});
        // console.log("repo..",Tweet)
        return Tweet;
    }
    catch(e){
        throw e;
    }
}