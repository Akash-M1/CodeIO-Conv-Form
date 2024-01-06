const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    usn:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    roles:[
        {
        type:String,
        required:true
        }
    ],
});

module.exports = mongoose.model("SeniorCore",RegisterSchema,"seniorcore");