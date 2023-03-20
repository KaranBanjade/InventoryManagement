
const { Asset,AssetTrack } = require('../models');
const operations = require('../utilities/common')(Asset);
    
const express = require('express');
const router = express.Router();
const { throwError,sendResponse } = require('../utilities/tools');

router.get('/:id',async (req, res) => {
        try {
            const resp= await operations.get({id: req.params.id || req.query.id, populate:'assetTracks_'});
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
            const asset = await Asset.findOne({where:{id:req.params.id}});
            const oldAsset = JSON.parse(JSON.stringify(asset));
            await asset.update({...req.body});
            await AssetTrack.create({
                assetId:asset.id,
                oldStatus:oldAsset.status,
                newStatus:asset.status,
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
        const resp = await operations.getAll({...req.body, populate:'assetTracks_'});
            sendResponse({res, status: 200, data: resp});
    } catch (err) {
        throwError(res, err);
    }
});

module.exports = {AssetRouter:router}