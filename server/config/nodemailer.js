const nodemailer = require('nodemailer');
const path = require('path');
const ejs = require('ejs');

const transporter = nodemailer.createTransport({
    service:"gmail",
    host:'smpt.gmail.com',
    port:587,
    secure:false,
    auth:{
        user:'codeio@bmsce.ac.in',
        pass:"kpfcplxofrrsyaga"
    }
});

const templateSender = (data, relativePath)=>{
    let htmlTemp;
    ejs.renderFile(
        path.join(__dirname,'../views/mailers',relativePath),
        data,
        (err,html)=>{
            if(err){
                console.log("Error rendering the file",err);
                return;
            }
            htmlTemp = html;
        }
    )
    return htmlTemp;
}

module.exports = {
    transporter:transporter,
    renderFile:templateSender,
}