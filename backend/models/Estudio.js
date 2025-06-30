const mongoose = require('mongoose');

const EstudioSchema = new mongoose.Schema({
  paciente: { type: String, required: true },
  pacienteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Paciente' },
  tipo: { type: String, required: true }, // Ej: Laboratorio, Imagen
  fecha: { type: Date, required: true },
  archivo: { type: String }, // Simulado, puede ser link o texto
  observaciones: String
});

module.exports = mongoose.model('Estudio', EstudioSchema);
