const { Sequelize } = require("sequelize");

module.exports = (sequelize,DataTypes) => {
    const Reservation = sequelize.define('Reservation', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
        date: {
          type: DataTypes.DATE,
          allowNull: false
        },
        checklist: {
          type: DataTypes.STRING,
          allowNull: false
        },
        cost: {
          type: DataTypes.DOUBLE,
          allowNull: false
        },
        idCustomer: {
            type: Sequelize.INTEGER,
            allowNull:false,
            references: {
                model: 'Customers',
                key: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },
        idFlight: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Flights',
                key: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        }
      }, {
        timestamps: false
      });

      return Reservation;
}