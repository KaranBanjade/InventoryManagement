
        var {Sequelize} = require('sequelize');
        require('dotenv').config();
        const DATABASE = process.env.DATABASENAME||'hax';
    const USER = 'root'
    const PASSWORD = '';
    const HOST = 'localhost';
        
        // connect to database
        const db = new Sequelize(DATABASE, USER, PASSWORD, {
            host: HOST,
            dialect: 'mysql',
            logging: false
            });
        
            db.authenticate().then(()=>{
                console.log("Connected!");
                db.sync().then(()=>{
                    console.log("Database is synced");
                }).catch((error)=>{
                    console.log(error);
                })
            })
            .catch((error)=>{
                console.log(error);
            })
        module.exports = db;
        
            