const express=require('express');
const RegisterController = require("../controller/registrations");
const router=express.Router();


router.get('/',RegisterController.getRegistrations);
router.post('/register',RegisterController.register);

module.exports=router;