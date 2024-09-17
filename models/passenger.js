module.exports = (sequelize,DataTypes) => {
    const Passenger = sequelize.define('Passenger', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
        first_name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        last_name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nationality: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone_number: {
          type: DataTypes.STRING,
          allowNull: false
        },
        passport: {
          type: DataTypes.STRING,
          allowNull: false
        },
        email: {
            type: DataTypes.STRING,
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

      return Passenger;
}