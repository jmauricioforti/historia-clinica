const express = require("express");
const crypto = require("crypto");
const router = express.Router();
const EventoBlockchain = require("../models/EventoBlockchain");

// Obtener el último hash
async function obtenerUltimoHash() {
  const ultimo = await EventoBlockchain.findOne().sort({ timestamp: -1 });
  return ultimo ? ultimo.hash : "0000";
}

// Calcular hash SHA256
function calcularHash({ usuario, paciente, accion, timestamp, hashAnterior }) {
  const contenido = `${usuario}|${paciente}|${accion}|${timestamp}|${hashAnterior}`;
  return crypto.createHash("sha256").update(contenido).digest("hex");
}

// Ruta para registrar evento
router.post("/", async (req, res) => {
  const { usuario, paciente, accion } = req.body;
  const timestamp = new Date();
  const hashAnterior = await obtenerUltimoHash();
  const hash = calcularHash({ usuario, paciente, accion, timestamp, hashAnterior });

  const evento = new EventoBlockchain({ usuario, paciente, accion, timestamp, hash, hashAnterior });
  await evento.save();

  res.json({ mensaje: "Evento registrado", evento });
});

// Ruta para obtener historial completo (opcional)
router.get("/", async (req, res) => {
  const eventos = await EventoBlockchain.find().sort({ timestamp: -1 });
  res.json(eventos);
});

module.exports = router;
