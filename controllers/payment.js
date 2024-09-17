const { Payment } = require('../models');

const addPayment = async (req, res) => {
    try {
      const pay = await Payment.create(req.body);
      res.status(201).json(pay);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Controlador para obtener todos los usuarios
  const getAllPayment = async (req, res) => {
    try {
      const payment = await Payment.findAll();
      res.status(200).json(payment);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  module.exports = {
    addPayment,
    getAllPayment
  };