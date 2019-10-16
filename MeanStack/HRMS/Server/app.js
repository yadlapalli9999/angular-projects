const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const signupRouters = require('./src/signupModule/signup/signup.router')

dotenv.config();
const PORT = 3000;

//connect to MongoDb


mongoose.connect(process.env.DB_Connect,{ useNewUrlParser: true,useUnifiedTopology: true},()=>{  
    console.log("Mongoose default connection is open to ", process.env.DB_Connect);
 });

 //middleware
 app.use(express.json())

// Router middle
app.use('/api/user', signupRouters)

app.listen(PORT,()=>{
    console.log(`server up and running is ${PORT}`)
})