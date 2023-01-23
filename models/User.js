const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please provide first name'],
        minLength: 1,
        maxLength: 30
    },
    lastName: {
        type: String,
        required: [true, 'Please provide last name'],
        minLength: 1,
        maxLength: 30
    },
    username: {
        type: String,
        required: [true, 'Please provide username'],
        minLength: 4,
        maxLength: 30,
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide password'],
        minLength: 6
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide valid email'
        ],
        unique: true
    },
    dateOfBirth: {
        type: Date,
        required: [true, 'Please provide date of birth'],
        min: '1920-01-01',
        max: '2020-01-01'
    }
})

module.exports = mongoose.model('User', UserSchema)