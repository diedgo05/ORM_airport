const { Sequelize } = require("sequelize");

module.exports = (sequelize,DataTypes) => {
    const Payment = sequelize.define('Payment', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
        method: {
            type: DataTypes.STRING,
            allowNull: false
          },
        date: {
          type: DataTypes.DATE,
          allowNull: false
        },
        digits: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        idReservation: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Reservations',
                key: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        }
      }, {
        timestamps: false
      });

      return Payment;
}