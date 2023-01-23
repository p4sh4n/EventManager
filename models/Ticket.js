const mongoose = require('mongoose')

const TicketSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Types.ObjectId,
        ref: 'user',
        required: true
    },
    eventID: {
        type: mongoose.Types.ObjectId,
        ref: 'event',
        required: true
    }
})

module.exports = mongoose.model('Ticket', TicketSchema)