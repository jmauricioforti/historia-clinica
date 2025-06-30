const express = require('express');
const router = express.Router();
const controller = require('../controllers/pacienteController');

router.get('/', controller.obtenerPacientes);
router.post('/', controller.crearPaciente);

module.exports = router;
