const mongoose = require("mongoose");

const eventoBlockchainSchema = new mongoose.Schema({
  usuario: String,
  paciente: String,
  accion: String,
  timestamp: { type: Date, default: Date.now },
  hash: String,
  hashAnterior: String
});

module.exports = mongoose.model("EventoBlockchain", eventoBlockchainSchema);
