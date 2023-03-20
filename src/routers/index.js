const {AssetRouter} = require('./AssetRoute');
const {AssetTrackRouter} = require('./AssetTrackRoute');
const {InventoryRouter} = require('./InventoryRoute');
const {InventoryStockRouter} = require('./InventoryStockRoute');
const {InventoryStockTrackRouter} = require('./InventoryStockTrackRoute');
const {HospitalRouter} = require('./HospitalRoute');
const routes = (app)=>{
    app.use('/api/asset', AssetRouter);
    app.use('/api/assettrack', AssetTrackRouter);
    app.use('/api/inventory', InventoryRouter);
    app.use('/api/inventorystock', InventoryStockRouter);
    app.use('/api/inventorystocktrack', InventoryStockTrackRouter);
    app.use('/api/hospital', HospitalRouter);
    
}
module.exports = routes;