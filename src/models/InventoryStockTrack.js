
const { DataTypes } = require('sequelize');

const InventoryStockTrackModel = {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    inventoryStockId: {
        type: DataTypes.UUID,
    },
    oldCount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        primaryKey: false,
        defaultValue: 0,
    },
    newCount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        primaryKey: false,
        defaultValue: 0,
    },
    timestamp: {
        type: DataTypes.DATE,
        allowNull: false,
        primaryKey: false,
        defaultValue: DataTypes.NOW,
    },
}
module.exports = InventoryStockTrackModel;
