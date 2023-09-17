const express = require("express")
const bodyParser = require("body-parser")
const {PORT} = require("./config/server-config")
const TicketController = require("./controllers/ticket-controller")
const setUpJobs = require("./utils/job")
const {createChannel, subscribeMessage} = require("./utils/messageQueue")
const {REMINDER_BINDING_KEY} = require("./config/server-config")
const EmailService = require("./services/email-service")




const setupAndStartServer = async()=>{
    const app = express()
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))

    app.post("/api/v1/tickets", TicketController.create)

    const channel = await createChannel()
    subscribeMessage(channel, EmailService.subscribeEvents, REMINDER_BINDING_KEY)

    app.listen(PORT, ()=>{
        console.log(`server is running on port ${PORT}`)
      setUpJobs()        
      
    })
}

setupAndStartServer()