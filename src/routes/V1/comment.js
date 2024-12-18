import express from 'express'
const router = express.Router()

router.get('/',(req,res)=>{
    return res.json({
        message: 'Hello, World! from comment'
    })
})

router.get('/:id',(req,res)=>{
    return res.json({
        message: `Hello, World! from comment ${req.params.id}`
    })
})

export default router;