module.exports = (sequelize,DataTypes) => {
    const Flight = sequelize.define('Flight', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        origin: {
            type: DataTypes.STRING,
            allowNull: false
        },
        destination: {
            type: DataTypes.STRING,
            allowNull: false
        },
        boarding_time: {
            type: DataTypes.TIME,
            allowNull: false
        },
        arrival_time: {
            type: DataTypes.TIME,
            allowNull: false
        }, 
        checking: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
    timestamps: false
});

    return Flight;

}