const express = require('express')
const router = express.Router()
const adminController = require('../controllers/adminController')

const autorizarAdmin = require('../middlewares/autorizarAdmin')

router.get('/admin',autorizarAdmin,adminController.admin)

module.exports = router