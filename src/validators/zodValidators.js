
const validate = (Schema)=>{
    return async (req, res, next) => {
        try{
            console.log(req.body);
            Schema.parse(req.body)
            next()
        }
        catch(error){
            return res.status(400).json({
                error:error.errors,
                success:false,
                massage:"validation failed"
            })
        }
    }
}
export default validate;