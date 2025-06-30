const Diagnostico = require('../models/Diagnostico');
const EventoClinico = require('../models/EventoClinico');

exports.crearDiagnostico = async (req, res) => {
  try {
    const nuevo = new Diagnostico(req.body);
    await nuevo.save();

    const evento = new EventoClinico({
      tipo: "Diagnóstico",
      descripcion: `Diagnóstico registrado para ${nuevo.paciente}`,
      hashSimulado: Math.random().toString(36).substring(2, 15),
      pacienteId: nuevo.pacienteId
    });
    await evento.save();

    res.status(201).json(nuevo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.obtenerDiagnosticos = async (req, res) => {
  try {
    const lista = await Diagnostico.find().sort({ fechaConsulta: -1 });
    res.json(lista);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
