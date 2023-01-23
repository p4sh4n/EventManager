const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please title'],
        minLength: 1,
        maxLength: 50
    },
    description: {
        type: String,
        required: [true, 'Please provide description']
    },
    type: {
        type: String,
        enum: {
            values: ['concert', 'movie', 'publicTalk', 'theatreShow', 'conference'],
            message: '{VALUE} type does not exist!',
        },
        required: true
    },
    maximumAttendants: {
        type: Number,
        required: [true, 'Please provide maximum number of attendants']
    },
    registeredAttendants: {
        type: Number
    },
    date: {
        type: Date,
        required: [true, 'Please provide date of the event']
    },
    time: {
        type: String,
        required: [true, 'Please provide time of the event']
    },
    reviews: [{
        userID: {
            type: mongoose.Types.ObjectId,
            ref: 'user',
            required: true
        },
        comment: {
            type: String
        },
        rating: {
            type: Number,
            min: [1, 'Rating value can not be under 1'],
            max: [10, 'Rating value can not be over 10']
        }
    }]
})

module.exports = mongoose.model('Event', EventSchema)