import express from 'express';
const app = express();
import mongoose from 'mongoose';
import { restRouter } from './indexAllRouters';

const PORT = 3000;

//app.use();
app.get('/',(req,res)=>{
    res.send('Hello world')
})
app.use('/api',restRouter)
app.get('/',(req,res,next)=>{
    console.log('middleware of express')
     next()
})
mongoose.Promise = global.Promise;   
 
mongoose.connect('mongodb://localhost/hrms', {useNewUrlParser: true})



app.listen(PORT,(err)=>{
    if(err){
        throw err;
    }else{
        console.log(`Server running on port:${PORT}`)
    }
})

