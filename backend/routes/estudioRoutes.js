const express = require('express');
const router = express.Router();
const controller = require('../controllers/estudioController');

router.get('/', controller.obtenerEstudios);
router.post('/', controller.crearEstudio);

module.exports = router;
