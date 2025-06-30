const express = require('express');
const router = express.Router();
const controller = require('../controllers/diagnosticoController');

router.get('/', controller.obtenerDiagnosticos);
router.post('/', controller.crearDiagnostico);

module.exports = router;
