const Estudio = require('../models/Estudio');
const EventoClinico = require('../models/EventoClinico');

exports.crearEstudio = async (req, res) => {
  try {
    const nuevo = new Estudio(req.body);
    await nuevo.save();

    const evento = new EventoClinico({
      tipo: "Estudio",
      descripcion: `Estudio ${nuevo.tipo} registrado para ${nuevo.paciente}`,
      hashSimulado: Math.random().toString(36).slice(2),
      pacienteId: nuevo.pacienteId
    });
    await evento.save();

    res.status(201).json(nuevo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.obtenerEstudios = async (req, res) => {
  try {
    const lista = await Estudio.find().sort({ fecha: -1 });
    res.json(lista);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
