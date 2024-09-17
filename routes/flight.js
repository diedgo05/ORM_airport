const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flight');

router.post('/add',flightController.addFlight);

router.get('/', flightController.getAllFlights);

module.exports = router;