const { Passenger } = require('../models');

const addPassenger = async (req, res) => {
    try {
      const pass = await Passenger.create(req.body);
      res.status(201).json(pass);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Controlador para obtener todos los usuarios
  const getAllPassengers = async (req, res) => {
    try {
      const passenger = await Passenger.findAll();
      res.status(200).json(passenger);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  module.exports = {
    addPassenger,
    getAllPassengers
  };