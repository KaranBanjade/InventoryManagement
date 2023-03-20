
        const AssetModel = require('./Asset')
const AssetTrackModel = require('./AssetTrack')
const InventoryModel = require('./Inventory')
const InventoryStockModel = require('./InventoryStock')
const InventoryStockTrackModel = require('./InventoryStockTrack')

        const db = require('../db/conn');
        
            const Asset = db.define('Asset', AssetModel);

            const AssetTrack = db.define('AssetTrack', AssetTrackModel);

            const Inventory = db.define('Inventory', InventoryModel);

            const InventoryStock = db.define('InventoryStock', InventoryStockModel);

            const InventoryStockTrack = db.define('InventoryStockTrack', InventoryStockTrackModel);

        const syncDatabase = async () => {
            await db.sync({force: true,
                logging: false,
                freezeTableName: true
            });
        }

        module.exports = {
            Asset,
AssetTrack,
Inventory,
InventoryStock,
InventoryStockTrack,
        }
    