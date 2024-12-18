import express from 'express';
import { PORT } from '../config/serverConfig.js';
const app = express()
// import tweetRouter from '../routes/tweet.js'
import apirouter from '../routes/apiRoutes.js'
import connectDB from '../config/dbConfig.js';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/tweet',tweetRouter)
app.use('/api',apirouter)
// console.log(import.meta.dirname)

app.get('/',(req,res)=>{
    res.send('Hello World ?Biku')
})

app.listen(PORT,()=>{
    console.log("server is running");
    connectDB()
})