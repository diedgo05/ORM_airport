const express = require('express');
const bodyParser = require('body-parser');
const customerRoutes = require('./routes/customer');
const flightRoutes = require('./routes/flight');
const app = express();

app.use(bodyParser.json());

// Cargar rutas
app.use('/customer', customerRoutes);
app.use('/flight',flightRoutes);

module.exports = app;
