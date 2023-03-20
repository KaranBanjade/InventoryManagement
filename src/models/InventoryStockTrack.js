
const { DataTypes } = require('sequelize');

const InventoryStockTrackModel = {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: 'UUIDV4',
    },
    inventoryStock: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: false,
        defaultValue: 'FK',
    },
    oldCount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        primaryKey: false,
        defaultValue: '0',
    },
    newCount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        primaryKey: false,
        defaultValue: '0',
    },
    timestamp: {
        type: DataTypes.DATE,
        allowNull: false,
        primaryKey: false,
        defaultValue: DataTypes.NOW,
    },
}
module.exports = InventoryStockTrackModel;
