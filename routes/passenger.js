const express = require('express');
const router = express.Router();
const passController = require('../controllers/passenger');

router.post('/add', passController.addPassenger);

router.get('/', passController.getAllPassengers);

module.exports = router;