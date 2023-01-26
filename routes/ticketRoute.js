const express = require('express')
const router = express.Router()
const {createTicket, getTicket, getTickets} = require('../controllers/ticketController')

router.route('/').get(getTickets).post(createTicket)
router.route('/:id').get(getTicket)


module.exports = router