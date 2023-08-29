const cron = require("node-cron")
const emailService = require("../services/email-service")
const sender = require("../config/emailConfig");
/**
 * 
 * 10:00 AM
 * every 5 mins
 * we will check theor any pending message which wqas expextrd to be sent by now and is now pending 
 */

const setUpJobs = ()=>{
    cron.schedule('*/1 * * * *' , async()=>{
        const response =  await emailService.fetchPendingEmails()
        console.log(response)
        response.forEach((email) => {
             sender.sendMail({
               // from: mailfrom, //we can also direct add here smtp userid
                to: email.recepientEmail,
                subject: email.subject,
                text: email.content,
              }, async(err,data)=>{
                if(err){
                    console.log(err)
                }
                else{
                    await emailService.update(email.id , {status: "SUCCESS"})
                }
                
              });
            
        });
        
       
    })
}

module.exports = setUpJobs