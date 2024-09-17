const { Flight } = require('../models');

const addFlight = async (req, res) => {
    try {
      const flight = await Flight.create(req.body);
      res.status(201).json(flight);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Controlador para obtener todos los usuarios
  const getAllFlights = async (req, res) => {
    try {
      const flights = await Flight.findAll();
      res.status(200).json(flights);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {
    addFlight,
    getAllFlights
  };