const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customer');

router.post('/add',customerController.addCustomer);

router.get('/', customerController.getAllCustomers);

module.exports = router;