const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()

const connectMongo = app.use((req,res,next)=>{
    mongoose.connect(process.env.MONGO_URI)
        .then(()=>{console.log('***CONNECTED TO MONGO***')})
        .catch(e=>console.log('error: ',e))
        next()
})

module.exports=connectMongo