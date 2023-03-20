
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
            logging: false,
            sync: {force:true}
            });
        
            db.authenticate().then(()=>{
                console.log("Connected!");
            })
            .catch((error)=>{
                console.log(error);
            })
        module.exports = db;
        
            