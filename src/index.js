const express = require("express")
const bodyParser = require("body-parser")
const {PORT} = require("./config/server-config")
const TicketController = require("./controllers/ticket-controller")
const setUpJobs = require("./utils/job")



const setupAndStartServer = ()=>{
    const app = express()
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))

    app.post("/api/v1/tickets", TicketController.create)

    app.listen(PORT, ()=>{
        console.log(`server is running on port ${PORT}`)
        setUpJobs()
      
    })
}

setupAndStartServer()