const { Customer } = require('../models');

const addCustomer = async (req, res) => {
    try {
      const custom = await Customer.create(req.body);
      res.status(201).json(custom);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Controlador para obtener todos los usuarios
  const getAllCustomers = async (req, res) => {
    try {
      const customers = await Customer.findAll();
      res.status(200).json(customers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {
    addCustomer,
    getAllCustomers
  };
  