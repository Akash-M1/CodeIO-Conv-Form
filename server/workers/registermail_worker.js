const queue = require('../config/kue');
const registerMailer = require('../mailers/registermail');

queue.process('email',(job,done)=>{
    registerMailer.newRegisterMail(job.data);
    done();
})