
const { DataTypes } = require('sequelize');

const InventoryModel = {
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
        type: DataTypes.ENUM('ACTIVE, INACTIVE'),
        allowNull: false,
        primaryKey: false
    },
    type: {
        type: DataTypes.ENUM('CONSUMABLE, SPARE_PART, COMPONENT, TOOL_AND_KIT'),
        allowNull: false,
        primaryKey: false
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
module.exports = InventoryModel;
