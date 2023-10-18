const nodeMailer = require('../config/nodemailer');

exports.newRegisterMail = (data)=>{
    const htmlStr = nodeMailer.renderFile({data:data},'/email.ejs');
    nodeMailer.transporter.sendMail({
        from:'codeio@bmsce.ac.in',
        to:data.email,
        subject:"Thank You for Registering with <b>CodeIO</b>",
        html:htmlStr
    },(err,info)=>{
        if(err){
            console.log("Error in sending the mail",err);
            return;
        }
    });
}