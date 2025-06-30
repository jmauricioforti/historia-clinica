const EventoClinico = require('../models/EventoClinico');

exports.obtenerEventos = async (req, res) => {
  try {
    const lista = await EventoClinico.find()
      .sort({ timestamp: -1 })
      .populate('pacienteId', 'nombre');
    res.json(lista);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
