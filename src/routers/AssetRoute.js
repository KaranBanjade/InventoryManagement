
const { Asset, AssetTrack } = require('../models');
const operations = require('../utilities/common')(Asset);

const express = require('express');
const router = express.Router();
const { throwError, sendResponse } = require('../utilities/tools');
const { where } = require('sequelize');

router.get('/:id', async (req, res) => {
    try {
        const resp = await operations.get({ id: req.params.id || req.query.id, populate: 'assetTracks_' });
        sendResponse({ res, status: 200, data: resp });
    } catch (err) {
        throwError(res, err);
    }
});

router.post('/', async (req, res) => {
    try {
        const resp = await operations.create(req.body);
        sendResponse({ res, status: 200, data: resp });
    } catch (err) {
        throwError(res, err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const oldAsset = await Asset.findOne({ where: { id: req.params.id } });

        await Asset.update({ ...req.body }, { where: { id: req.params.id }, returning: true });
        await AssetTrack.create({
            assetId: req.params.id,
            oldStatus: oldAsset?.status,
            newStatus: req.body.status,
        });
        sendResponse({ res, status: 200, data: { message: 'Updated successfully' } });
    } catch (err) {
        throwError(res, err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const resp = await operations.remove({ id: req.params.id || req.query.id });
        sendResponse({ res, status: 200, data: resp });
    } catch (err) {
        throwError(res, err);
    }
});

router.post('/all', async (req, res) => {
    try {
        const resp = await operations.getAll({ ...req.body, populate: 'assetTracks_' });
        sendResponse({ res, status: 200, data: resp });
    } catch (err) {
        throwError(res, err);
    }
});

module.exports = { AssetRouter: router }