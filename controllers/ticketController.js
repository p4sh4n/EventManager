const Ticket = require('../models/Ticket')
const User = require('../models/User')
const Event = require('../models/Event')

const {NotFoundError, BadRequestError} = require('../errors');
const { StatusCodes } = require('http-status-codes');

const getTicket = async (req,res) => {
    const ticketId = req.params.id 
    const ticket = await Ticket.findById({_id:ticketId})
    if(!ticket){
        throw new NotFoundError('There is no ticket with that id')
    }
    res.status(StatusCodes.OK).json({ticket})
}

const createTicket = async (req, res) => {  
    const sentUser = req.body.userId
    const sentEvent = req.body.eventId
    const user = User.findById({sentUser})
    let event = Event.findById({sentEvent})
    
    if(!user || !event){
        throw new BadRequestError('User/event with entered id not found!')
    }
    const ticket = Ticket.create({userID: sentUser, eventID: sentEvent});
    event.registeredAttendants += 1
    Event.findByIdAndUpdate({sentEvent}, {registeredAttendants: event.registeredAttendants})
    res.status(StatusCodes.CREATED).json({ticket})
}

const getTickets = async (req, res) => {
    const tickets = await Ticket.find();
    if(!tickets){
       res.status(StatusCodes.NO_CONTENT).json({msg:"Tickets collection is empty"})
    }
    res.status(StatusCodes.OK).json({tickets})
}

module.exports = {createTicket, getTicket, getTickets}