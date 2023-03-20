const { Admin } = require('../models');
const operations = require('../utilities/common')(Admin);
const express = require('express');
const router = express.Router();
const { throwError, sendResponse } = require('../utilities/tools');
const bcrypt = require('bcrypt');
router.get('/:id', async (req, res) => {
    try {
        const resp = await operations.get({ id: req.params.id || req.query.id , populate: 'hospital_'});
        resp.password = undefined;
        sendResponse({ res, status: 200, data: resp });
    } catch (err) {
        throwError(res, err);
    }
}
);
router.post('/', async (req, res) => {
    try {
        // encrypt password with bcrypt
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        const resp = await operations.create(req.body);
        sendResponse({ res, status: 200, data: resp });
    } catch (err) {
        throwError(res, err);
    }
}
);
router.put('/:id', async (req, res) => {
    try {
        const resp = await operations.update({ id: req.params.id || req.query.id, body: req.body });
        sendResponse({ res, status: 200, data: resp });
    } catch (err) {
        throwError(res, err);
    }
}
);
router.delete('/:id', async (req, res) => {
    try {
        const resp = await operations.remove({ id: req.params.id || req.query.id });
        sendResponse({ res, status: 200, data: resp });
    } catch (err) {
        throwError(res, err);
    }
}
);
router.post('/all', async (req, res) => {

    try {
        const resp = await operations.getAll({...req.body, populate: 'hospital_'});
        resp.forEach(resizeBy => {
                resp.password = undefined;
        });
        sendResponse({ res, status: 200, data: resp });
    } catch (err) {
        throwError(res, err);
    }
}
);
router.post('/login', async (req, res) => {
    try {
        const resp = await operations.get({ email: req.body.email});
        if (!resp) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }
        const isMatch = await bcrypt.compare(req.body.password, resp.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }
        resp.password = undefined;
        sendResponse({ res, status: 200, data: resp });
    } catch (err) {
        throwError(res, err);
    }
}
);

module.exports = { AdminRouter: router }
