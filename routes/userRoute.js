const express = require('express')
const router = express.Router()
const {registerUser, loginUser, getAllUsers, getUser, editUser} = require('../controllers/userController')

router.route('/').get(getAllUsers).post(registerUser)
router.route('/:id').get(getUser).patch(editUser)
router.route('/login').post(loginUser)


module.exports = router