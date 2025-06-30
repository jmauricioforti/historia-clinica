let datos = [];

exports.obtenerDatos = (req, res) => {
  res.json(datos);
};

exports.simular = (req, res) => {
  const nuevo = {
    timestamp: new Date(),
    ritmoCardiaco: 70 + Math.floor(Math.random() * 15),
    presionSistolica: 120 + Math.floor(Math.random() * 10),
    presionDiastolica: 80 + Math.floor(Math.random() * 5)
  };
  datos.push(nuevo);
  if (datos.length > 10) datos.shift();
  res.status(201).json(nuevo);
};

// Simulación de evento crítico a los 30 o XX segundos

setTimeout(() => {
  datos.push({
    timestamp: new Date(),
    ritmoCardiaco: 95,
    presionSistolica: 145,
    presionDiastolica: 100
  });
  console.log("⚠️ Evento crítico IoT simulado");
}, 30000);

