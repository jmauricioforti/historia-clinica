const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  clave: { type: String, required: true },
  rol: { type: String, enum: ['profesional', 'admin'], default: 'profesional' }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
