const mongoose = require('mongoose');

const PacienteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  dni: { type: String, required: true, unique: true },
  fechaNacimiento: Date,
  genero: String,
  direccion: String,
  contacto: String,
  obrasocial: String
});

module.exports = mongoose.model('Paciente', PacienteSchema);
