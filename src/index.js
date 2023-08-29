const express = require("express")
const bodyParser = require("body-parser")
const {PORT} = require("./config/server-config")
const {sendBasicEmail} = require("./services/email-service")



const setupAndStartServer = ()=>{
    const app = express()
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))

    app.listen(PORT, ()=>{
        console.log(`server is running on port ${PORT}`)

        // sendBasicEmail(
        //     'support@admin.com',
        //     'abhinav.temp01@gmail.com',
        //     'For testing SMTP',
        //     'Hi there! This email was sent from a node server'
        // )
    })
}

setupAndStartServer()