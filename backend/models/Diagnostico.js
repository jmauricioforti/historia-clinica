const mongoose = require('mongoose');

const DiagnosticoSchema = new mongoose.Schema({
  paciente: { type: String, required: true },
  pacienteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Paciente' },
  fechaConsulta: { type: Date, required: true },
  diagnostico: String,
  tratamiento: String,
  profesional: String,
  motivoConsulta: String,
  observaciones: String
});

module.exports = mongoose.model('Diagnostico', DiagnosticoSchema);
