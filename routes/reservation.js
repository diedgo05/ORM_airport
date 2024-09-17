const express = require('express');
const router = express.Router();
const resController = require('../controllers/reservation');

router.post('/add', resController.addReservation);

router.get('/', resController.getAllReservations);

module.exports = router;