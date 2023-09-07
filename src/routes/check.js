const express = require('express');
const { check } = require('../controllers/check');

const checkRouter = express.Router();

checkRouter.get('/', check);

module.exports = checkRouter;