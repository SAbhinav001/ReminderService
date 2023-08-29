const {NotificationTicket} = require("../models")
const {Op} = require("sequelize")

class TicketRepository{
    async getAll(){
        try {
            const ticket = await NotificationTicket.findAll()
            return ticket
        } catch (error) {
            throw error
        }
    }

    async create(data){
        try {
            const ticket = await NotificationTicket.create(data)
            return ticket
        } catch (error) {
            throw error
        }
    }

    async get(filter){
        try {
            const tickets = await NotificationTicket.findAll({
                where:{
                    status: filter.status,
                    NotificationTime: {
                        [Op.lte] : new Date()
                    }
                }
             
            })
            return tickets
        } catch (error) {
            throw error
        }
    }

    async update(ticketId, data){
        try {
            console.log(data)
            const ticket = await NotificationTicket.findByPk(ticketId)
            ticket.status = data.status
            await ticket.save()
            return ticket
        } catch (error) {
            throw error
        }
    }
}

module.exports = TicketRepository