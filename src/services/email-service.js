const sender = require("../config/emailConfig")

const sendBasicEmail =async(mailfrom, mailto , mailSubj, mailBody)=>{
 try {
    const response = await  sender.sendMail({
        from : mailfrom,   //we can also direct add here smtp userid
        to : mailto,
        subject: mailSubj,
        text: mailBody
    })
    
 } catch (error) {
    console.log(error)
    
 }

}

module.exports = {
    sendBasicEmail
}