const Paciente = require('../models/Paciente');

exports.crearPaciente = async (req, res) => {
  try {
    const nuevo = new Paciente(req.body);
    await nuevo.save();
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.obtenerPacientes = async (req, res) => {
  try {
    const lista = await Paciente.find();
    res.json(lista);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
