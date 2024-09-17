const { Reservation } = require('../models');

const addReservation = async (req, res) => {
    try {
      const res = await Reservation.create(req.body);
      res.status(201).json(res);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Controlador para obtener todos los usuarios
  const getAllReservations = async (req, res) => {
    try {
      const reservations = await Reservation.findAll();
      res.status(200).json(reservations);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  module.exports = {
    addReservation,
    getAllReservations
  };