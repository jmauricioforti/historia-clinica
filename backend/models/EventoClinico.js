const mongoose = require('mongoose');

const EventoClinicoSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  tipo: { type: String, required: true },
  descripcion: { type: String },
  hashSimulado: { type: String },
  pacienteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Paciente' }
});

module.exports = mongoose.model('EventoClinico', EventoClinicoSchema);
