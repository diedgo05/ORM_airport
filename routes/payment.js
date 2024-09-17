const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/payment');

router.post('/add', paymentController.addPayment);

router.get('/', paymentController.getAllPayment);

module.exports = router;