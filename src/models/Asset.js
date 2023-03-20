
const { DataTypes } = require('sequelize');

const AssetModel = {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: 'UUIDV4',
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: false,
        defaultValue: '',
    },
    status: {
        type: DataTypes.ENUM('NEW, WORKING, BACKUP, END_OF_LIFE, REMOVED'),
        allowNull: false,
        primaryKey: false,
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        primaryKey: false,
        defaultValue: '0',
    },
    currency: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: false,
        defaultValue: '$',
    },
    timestamp: {
        type: DataTypes.DATE,
        allowNull: false,
        primaryKey: false,
        defaultValue: '',
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: false,
        defaultValue: '',
    },
    serialNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: false,
        defaultValue: '',
    },
}
module.exports = AssetModel;
