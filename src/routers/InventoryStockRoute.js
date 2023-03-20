
const { InventoryStock, InventoryStockTrack } = require('../models');
const operations = require('../utilities/common')(InventoryStock);
    
const express = require('express');
const router = express.Router();
const { throwError,sendResponse } = require('../utilities/tools');

router.get('/:id',async (req, res) => {
        try {
            const resp= await operations.get({id: req.params.id || req.query.id, populate:'inventoryStockTracks_'});
            sendResponse({res, status: 200, data: resp});
        } catch (err) {
            throwError(res, err);
        }
});

router.post('/',async (req, res) => {
        try {
            const resp = await operations.create(req.body);
            sendResponse({res, status: 200, data: resp});
        } catch (err) {
            throwError(res, err);
        }
});

router.put('/:id',async (req, res) => {
        try {
            const oldInventoryStock = await InventoryStock.findOne({where:{id:req.params.id}});
            await operations.update({id: req.params.id || req.query.id,body:req.body});
            await InventoryStockTrack.create({
                inventoryStockId:req.params.id,
                oldQuantity:oldInventoryStock?.numberOfItems,
                newQuantity:req.body.numberOfItems,
            });
            sendResponse({res, status: 200, data: {message:'Updated successfully'}});
        } catch (err) {
            throwError(res, err);
        }
});

router.delete('/:id',async (req, res) => {
        try {
            const resp = await operations.remove({id: req.params.id || req.query.id});
            sendResponse({res, status: 200, data: resp});
        } catch (err) {
            throwError(res, err);
        }
});

router.post('/all', async(req, res) => {
    try {
        const resp = await operations.getAll({...req.body, populate: 'inventoryStocks_'});
            sendResponse({res, status: 200, data: resp});
    } catch (err) {
        throwError(res, err);
    }
});

module.exports = {InventoryStockRouter:router}