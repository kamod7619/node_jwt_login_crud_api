const {sendSuccess,sendError}=require('../helpers/responseHelper');
const userModel = require('../models/userModel');
const userToken = require('../models/userTokenModel')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//Login user
exports.loginuser= async(req,res)=>{
    const {email,password}=req.body;
    
    try {
        const [[user]]=await userModel.getUserByEmail(email);
        if(!user)
        {
            sendError(res,'Invalid user');
        }

        // console.log(user)
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            sendError(res,'Invalid password');
        }
        const token = jwt.sign({id:user.id},process.env.JWT_SECRET_KEY,{expiresIn:'1h'})
        await userToken.storeUserToken(user.id,token);
        
        sendSuccess(res,'Login successful',{token:token,user:user});
    } catch (err) {
        sendError(res,'Login failed',err);
    }
}

// Logout User
exports.logoutUser = async(req, res) => {
    const token = req.headers["authorization"]?.split(" ")[1];
    await userToken.inactiveUserToken(0,token);
    // Simply respond with a success message, instructing the client to delete the token
    sendSuccess(res, 'Logged out successfully');
  };