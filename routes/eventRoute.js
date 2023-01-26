const express = require('express')
const router = express.Router()
const {createEvent, getEvents, getEvent} = require('../controllers/eventController')

router.route('/').get(getEvents).post(createEvent)
router.route('/:id').get(getEvent)


module.exports = router