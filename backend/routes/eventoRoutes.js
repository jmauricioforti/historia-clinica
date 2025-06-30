const express = require('express');
const router = express.Router();
const controller = require('../controllers/eventoController');

router.get('/', controller.obtenerEventos);

module.exports = router;
