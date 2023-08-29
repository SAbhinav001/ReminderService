
const TicketRepository = require("../Repository/ticket-repository")

const repo = new TicketRepository();

const fetchPendingEmails = async(timeStamp) =>{
    try {
        const response = await repo.get({status:"PENDING"})
        return response
    } catch (error) {
      console.log(error);
    }
}

const createNotification = async(data)=>{
    try {
      const response = await repo.create(data)
      return response;
    } catch (error) {
      console.log(error);
    }
}

const update = async(ticketID , data)=>{
  try {
    const response = await repo.update(ticketID, data)
    return response;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  
  fetchPendingEmails,
  createNotification,
  update
};
