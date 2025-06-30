// backend/app.js
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Routers
const loginRouter = require("./routes/login");
app.use("/api/login", loginRouter);

// (Agregar otros routers abajo si los tenés)
const pacienteRouter = require("./routes/pacienteRoutes");
const diagnosticoRouter = require("./routes/diagnosticoRoutes");
const eventoRouter = require("./routes/eventoRoutes");
const estudioRouter = require("./routes/estudioRoutes");

app.use("/api/pacientes", pacienteRouter);
app.use("/api/diagnosticos", diagnosticoRouter);
app.use("/api/eventos", eventoRouter);
app.use("/api/estudios", estudioRouter);

// MongoDB conexión (simulada o real)
require("./config/db");

app.listen(port, () => {
  console.log(`Servidor backend escuchando en http://localhost:${port}`);
});