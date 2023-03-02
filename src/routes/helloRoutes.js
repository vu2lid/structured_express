// routes/userRoutes.js

const express = require('express');
const helloRoutes = express.Router();
const helloController = require('../controllers/helloController');

helloRoutes.get('/', helloController.getHello);
helloRoutes.post('/', helloController.createHello);

module.exports = helloRoutes;

