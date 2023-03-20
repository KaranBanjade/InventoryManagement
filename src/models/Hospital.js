
const { DataTypes } = require('sequelize');

const HospitalModel = {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: false,
        defaultValue: '',
    },
    latitude: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        primaryKey: false,
        defaultValue: 0,
    },
    longitude: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        primaryKey: false,
        defaultValue: 0,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: false,
        defaultValue: '',
    },
    zipCode: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: false,
        defaultValue: '',
    },
    region: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: false,
        defaultValue: '',
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: false,
        defaultValue: '',
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: false,
        defaultValue: '',
    },
    landmark: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: false,
        defaultValue: '',
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: false,
        defaultValue: '',
    },
    NumberOfDoctors: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: false,
        defaultValue: 0,
    },
    NumberOfICU: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: false,
        defaultValue: 0,
    },
    totalRooms: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: false,
        defaultValue: 0,
    },
}
module.exports = HospitalModel;
