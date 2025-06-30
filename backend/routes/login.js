const express = require("express");
const router = express.Router();
const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");

// POST /api/login
router.post("/", async (req, res) => {
  const { usuario, password } = req.body;

  try {
    const user = await Usuario.findOne({ email: usuario });

    if (!user) {
      return res.status(401).json({ mensaje: "Usuario no encontrado" });
    }

    const coincide = await bcrypt.compare(password, user.clave);
    if (!coincide) {
      return res.status(401).json({ mensaje: "Credenciales incorrectas" });
    }

    return res.json({
      mensaje: "Login correcto",
      usuario: user.email,
      rol: user.rol,
      token: "simulado-123"
    });

  } catch (error) {
    console.error("Error en login:", error);
    return res.status(500).json({ mensaje: "Error en el servidor" });
  }
});

module.exports = router;