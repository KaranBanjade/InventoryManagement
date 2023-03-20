
const { DataTypes } = require('sequelize');

const InventoryStockModel = {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: 'UUIDV4',
    },
    inventory: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: false,
        defaultValue: 'fk',
    },
    unit: {
        type: DataTypes.ENUM('KELVIN, METER, AMPERE, SECOND, MOLE, KILOGRAM, CANDELA'),
        allowNull: false,
        primaryKey: false
    },
    numberOfItems: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        primaryKey: false,
        defaultValue: '0',
    },
    minThreshold: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: false,
        defaultValue: '0',
    },
}
module.exports = InventoryStockModel;
