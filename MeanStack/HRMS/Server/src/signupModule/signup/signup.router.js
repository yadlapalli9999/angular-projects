
const signupRouter = require('express').Router();
const signUp = require('./signup.model');
const Joi = require('joi');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var nodemailer=require('nodemailer')
const {registerValidation,loginValidation} = require('./signup.service')




signupRouter.post('/register',async(req,res)=>{
     //Lets validate the data before we a user
    const {error} = registerValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    //Checking if the user is already in database
    const emailExist = await signUp.findOne({email:req.body.email})
    if(emailExist) return res.status(400).send('Email already exist')

    //Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password,salt)

    //Create new user
    const signup = new signUp({
        userName:req.body.userName,
        email:req.body.email,
        password:hashPassword
    });
    try{
      const signupSaved = await signup.save();
      res.send(signupSaved)
      var transporter=nodemailer.createTransport({
        service:'Gmail',
        auth:{
            user:'yadlapalli9999@gmail.com',
            pass:'ramaRao1',
        }
    });
    var mailoptions={
        from:'"Ramarao"<yadlapalli9999@gmail.com>',
        to:req.body.email,
        subject:'Your Registration successfully',
        text:"you have a submission from. 'Name:'+req.body.email+",
        html:"<p>you have succesfully created of<br> userName:"+req.body.userName+"<br>email:"+req.body.email+"<br>password:"+req.body.password+""
    }
    transporter.sendMail(mailoptions,function(error,info){
        if(error){
            return console.log(error);
        }
        console.log('meassage sent:'+info.response);
        // res.redirect('/');
    })
    }catch(err){
        res.status(400).send(err)
    }
})

signupRouter.post('/login',async(req,res)=>{
     //Lets validate the data before we a user
     const {error} = loginValidation(req.body)
     if(error) return res.status(400).send(error.details[0].message)
 
     //Checking if the user is already in database
     const user = await signUp.findOne({email:req.body.email})
     if(!user) return res.status(400).send('Email is not found')
     
     //Password correct
     const validPass = await bcrypt.compare(req.body.password, user.password)
     if(!validPass) return res.status(400).send("invalid password")

    // Create and assign token
     const token = jwt.sign({_id:user._id},process.env.TOKEN_SECRET);
     res.header('auth-token',token).send(token)
    //  res.send('logged in')
})

module.exports = signupRouter;