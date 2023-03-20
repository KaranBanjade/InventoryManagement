
const { DataTypes } = require('sequelize');

const AssetTrackModel = {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    assetId: {
        type: DataTypes.UUID,
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
