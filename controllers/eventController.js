const Event = require('../models/Event')
const {NotFoundError, BadRequestError} = require('../errors');
const { StatusCodes } = require('http-status-codes');

const createEvent = async (req, res) => {  
    const sentEvent = req.body
    const event = await Event.create(sentEvent)
    res.status(StatusCodes.CREATED).json({event})
}

const getEvents = async (req, res) => {
    const events = await Event.find()
    if(!events){
        res.status(StatusCodes.NO_CONTENT).json({msg:"Events collection is empty"})
     }
     res.status(StatusCodes.OK).json({events})
}

const getEvent = async (req,res) => {
    const eventId = req.params.id
    const targetedEvent = await User.findById({_id:eventId})
    if(!targetedEvent){
        throw new NotFoundError('There is no event with that id')
    }
    res.status(StatusCodes.OK).json({targetedEvent})
} 

module.exports = {createEvent, getEvents, getEvent}