
        const AssetModel = require('./Asset')
const AssetTrackModel = require('./AssetTrack')
const InventoryModel = require('./Inventory')
const InventoryStockModel = require('./InventoryStock')
const InventoryStockTrackModel = require('./InventoryStockTrack')
const HospitalModel = require('./Hospital')

    
        const db = require('../db/conn');
        
            const Asset = db.define('Asset', AssetModel);

            const AssetTrack = db.define('AssetTrack', AssetTrackModel);

            const Inventory = db.define('Inventory', InventoryModel);

            const InventoryStock = db.define('InventoryStock', InventoryStockModel);

            const InventoryStockTrack = db.define('InventoryStockTrack', InventoryStockTrackModel);

            const Hospital = db.define('Hospital', HospitalModel);


            Asset.hasMany(AssetTrack, {foreignKey: 'assetId', as: 'assetTracks_'});
            AssetTrack.belongsTo(Asset, {foreignKey: 'assetId',as: 'asset_'});

            Inventory.hasMany(InventoryStock, {foreignKey: 'inventoryId', as: 'inventoryStocks_'});
            InventoryStock.belongsTo(Inventory, {foreignKey: 'inventoryId',as: 'inventory_'});

            InventoryStock.hasMany(InventoryStockTrack, {foreignKey: 'inventoryStockId', as: 'inventoryStockTracks_'});
            InventoryStockTrack.belongsTo(InventoryStock, {foreignKey: 'inventoryStockId',as: 'inventoryStock_'});

            Hospital.hasMany(Inventory, {foreignKey: 'hospitalId', as: 'inventories_'});
            Inventory.belongsTo(Hospital, {foreignKey: 'hospitalId',as: 'hospital_'});

            Hospital.hasMany(Asset, {foreignKey: 'hospitalId', as: 'assets_'});
            Asset.belongsTo(Hospital, {foreignKey: 'hospitalId',as: 'hospital_'});


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
Hospital
        }
    