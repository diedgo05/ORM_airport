const express = require('express');
const bodyParser = require('body-parser');
const customerRoutes = require('./routes/customer');
const flightRoutes = require('./routes/flight');
const reservationRoutes = require('./routes/reservation');
const paymentRoutes = require('./routes/payment');
const passengerRoutes = require('./routes/passenger');
const app = express();

app.use(bodyParser.json());

// Cargar rutas
app.use('/customer', customerRoutes);
app.use('/flight',flightRoutes);
app.use('/res',reservationRoutes);
app.use('/pay',paymentRoutes);
app.use('/pass',passengerRoutes);

module.exports = app;
