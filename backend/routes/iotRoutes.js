const express = require('express');
const router = express.Router();
const controller = require('../controllers/iotController');

router.get('/', controller.obtenerDatos);
router.post('/simular', controller.simular);

module.exports = router;
