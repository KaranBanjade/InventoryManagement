
const { Inventory } = require('../models');
const operations = require('../utilities/common')(Inventory);
    
const express = require('express');
const router = express.Router();
const { throwError,sendResponse } = require('../utilities/tools');

router.get('/:id',async (req, res) => {
        try {
            const resp= await operations.get({id: req.params.id || req.query.id, populate:'inventoryStocks_'});
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
            const resp = await operations.update({id: req.params.id || req.query.id,body:req.body});
            sendResponse({res, status: 200, data: resp});
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

module.exports = {InventoryRouter:router}