const express = require('express')
const router = express.Router()
const mongoose=require('mongoose')
const Conversion=require('../schemas/conversionSchema')

router.get('/conversions',(req,res)=>{
    Conversion
    .find()
    .then(data=>res.status(200).json(data))
})

router.post('/conversions',(req,res)=>{
    const {body}=req
    const {name,product}=body
    const arr= name.split('-')
    const obj = {
        name:name,
        product:product,
        from:arr[0],
        to:arr[1]
    }
    const conv = Conversion(obj)


    if(!conv){
        return res.status(400).json({
            error:'no hay contenido'
        })
    }else {
        conv
        .save()
        .then(data=>res.json(data))
        .catch(error=>console.log(error))
        res.status(201).json(conv)
    }

})

router.delete('/conversions',(req,res)=>{
    const {id} = req.body;
    Conversion
        .deleteOne({_id:id})
        .then(data=>res.json(data))
})

module.exports=router