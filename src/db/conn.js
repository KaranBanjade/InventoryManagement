
var { Sequelize } = require('sequelize');
require('dotenv').config();
const DATABASE = process.env.DB_NAME || 'hax';
const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASS;
let pass = process.env.PASSWORD || PASSWORD;
const HOST = process.env.DB_HOST;
console.log(PASSWORD,pass);

// connect to database
const db = new Sequelize(DATABASE, USER, pass, {
    host: HOST,
    dialect: 'mysql',
    logging: false,
    sync: { force: true }
});

db.authenticate().then(() => {
    console.log("Connected!");
    db.sync()
})
    .catch((error) => {
        console.log(error);
    })
module.exports = db;

