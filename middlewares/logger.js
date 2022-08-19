const express = require('express');
const app = express();

const logger = app.use((req,res,next)=>{
    
    const {body,method,url}=req
    console.log(method, body);
    console.log('FROM: ',url);
    next()
})


module.exports=logger