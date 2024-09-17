const Sequelize = require('sequelize');
const config = require('../config/config.json');
const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
  }
);

const db = {};
db.ORM = Sequelize;
db.connection = sequelize;

// Importar modelos
db.Customer = require('./customer')(sequelize,Sequelize);
db.Flight = require('./flight')(sequelize,Sequelize);
db.Reservation = require('./reservation')(sequelize,Sequelize);
db.Payment = require('./payment')(sequelize,Sequelize);
db.Passenger = require('./passenger')(sequelize,Sequelize);

module.exports = db;

