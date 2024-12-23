import { createTweet as CT, getTweets as GT,getTweetbyID as GTI, deleteTweetbyId as DTI ,updateTweet as UTI} from "../services/tweetService.js"

export async function createTweet(req,res){
    console.log(req.file)   // this file object return by s3
    try{
        const response = await CT({
            body:req.body.body,
            image:req.file?.location
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

export async function getTweets(req,res){
    try{
        const response = await GT();
        return res.status(201).json({
            success:true,
            data:response,
            message: 'Tweets fetched successfully'
        })
    }
    catch(e){
        console.log(e)
        return res.status(500).json({
            message:"internal server error",
            success:false
        })
    }

}
export async function getTweetbyID(req,res){
    try{
        const response = await GTI(req.params.id);
        return res.status(201).json({
            success:true,
            data:response,
            message: 'Tweet fetched successfully'
        })
    }
    catch(e){
        console.log(e)
        if(e.status){
            return res.status(404).json({
                message:e.message,
                success:false
    
            })    
        }
        return res.status(500).json({
            message:"internal server error",
            success:false
        })

    }

}

export const DeleteTweet = async(req,res)=>{
    try{
        const response = await DTI(req.params.id);
        return res.status(201).json({
            success:true,
            data:response,
            message: 'Tweet deleted successfully'
        })

    }
    catch(e){
        if(e.status){
            return res.status(404).json({
                message:e.message,
                success:false
            })
        }
        return res.status(500).json({
            message:"Something went wrong",
            success:false
        })
    }
}

export const updateTweet = async(req,res)=>{
    try{
        const response = await UTI(req.params.id,req.body.body);
        console.log("controller in try",response)
        return res.status(201).json({
            success:true,
            data:response,
            message: 'Tweet updated successfully'
        })
    }catch(e){
        console.log(e)
        if(e.status){
            return res.status(404).json({
                message:e.message,
                success:false

            })
        }
        return res.status(500).json({
            message:"Something went wrong",
            success:false
        })
    }
}