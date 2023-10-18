const register = require('../model/register');
const registerEmail = require('../mailers/registermail');
const queue = require('../config/kue');
const registerWorker = require("../workers/registermail_worker");

exports.getRegistrations = (req,res)=>{
    return res.send("Hello Everyone");
}


exports.register = async (req,res) =>{
    try {
        const data = await register.create(req.body);
        let job = queue.create('email',data).save(function(err){
            if(err){
                console.log("Error in Job",err);
                return;
            }
        })
        return res.status(200).json({
            messsage:"Successfully Registred",
            data:data
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            messsage:"Error Occured",
            error:error
        });
    }
}