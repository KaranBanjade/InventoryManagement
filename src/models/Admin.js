const { Sequelize } = require("sequelize");

const {DataTypes} = Sequelize

const AdminModel = {
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
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: false,
        defaultValue: '',
    },
    password: {
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
    hospitalId: {
        type: DataTypes.UUID
    }
}

module.exports = AdminModel