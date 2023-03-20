
const { DataTypes } = require('sequelize');

const AssetTrackModel = {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: 'UUIDV4',
    },
    assetId: {
        type: DataTypes.UUID,
        allowNull: true,
        primaryKey: false,
        defaultValue: 'FK',
    },
    oldStatus: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: false,
        defaultValue: '',
    },
    newStatus: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: false,
        defaultValue: '',
    },
    timestamp: {
        type: DataTypes.DATE,
        allowNull: false,
        primaryKey: false,
        defaultValue: DataTypes.NOW,
    },
}
module.exports = AssetTrackModel;
