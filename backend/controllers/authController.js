const Usuario = require('../models/Usuario');

exports.login = async (req, res) => {
  const { email, clave } = req.body;
  try {
    const usuario = await Usuario.findOne({ email });
    if (!usuario || usuario.clave !== clave) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }
    res.json({ mensaje: "Login exitoso", usuario: { email, rol: usuario.rol } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
