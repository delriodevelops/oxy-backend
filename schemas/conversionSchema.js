const mongoose = require('mongoose')

const conversionSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    product:{
        type:Number,
        required:true
    },
    from:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('convertion',conversionSchema);