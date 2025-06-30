const historial = document.getElementById("historial");
const pacienteSelect = document.getElementById("pacienteSelect");
const formDiagnostico = document.getElementById("form-diagnostico");
const eventos = document.getElementById("eventos");
const rangoSelect = document.getElementById("rangoSelect");

const datosIoTPorPaciente = {}; // Simulación por paciente
let hora = 0;
let rangoActual = 60 * 12; // 12 horas por defecto (720 minutos)

function generarBufferInicial(paciente) {
  const datos = { ritmo: [], presion: [] };

  let ritmo = 75 + Math.random() * 10;
  let presion = 125 + Math.random() * 10;

  for (let i = 0; i < 1440; i++) {
    ritmo += (Math.random() - 0.5) * 2;
    presion += (Math.random() - 0.5) * 2;

    ritmo = Math.min(Math.max(ritmo, 65), 100);
    presion = Math.min(Math.max(presion, 110), 140);

    datos.ritmo.push(Math.round(ritmo));
    datos.presion.push(Math.round(presion));
  }

  datosIoTPorPaciente[paciente] = datos;
}

function togglePacienteForm() {
  document.getElementById("pacienteCard").classList.toggle("d-none");
}

async function cargarPacientes() {
  const res = await fetch("http://localhost:3000/api/pacientes");
  const data = await res.json();
  pacienteSelect.innerHTML = "";
  data.forEach(p => {
    const opt = document.createElement("option");
    opt.value = p.nombre;
    opt.textContent = `${p.nombre} (DNI ${p.dni})`;
    pacienteSelect.appendChild(opt);

    if (!datosIoTPorPaciente[p.nombre]) {
      generarBufferInicial(p.nombre);
    }
  });
  cargarHistorial();
  actualizarGraficas();
}

async function cargarHistorial() {
  const res = await fetch("http://localhost:3000/api/diagnosticos");
  const data = await res.json();
  const paciente = pacienteSelect.value;
  historial.innerHTML = "";
  data.filter(d => d.paciente === paciente).forEach(item => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerHTML = `<strong>${item.diagnostico}</strong> (${new Date(item.fechaConsulta).toLocaleDateString()})
    <br/>Tratamiento: ${item.tratamiento}<br/><em>Profesional: ${item.profesional}</em>`;
    historial.appendChild(li);
  });

  registrarAccesoBlockchain("ver_historial", paciente);
}

formDiagnostico.addEventListener("submit", async (e) => {
  e.preventDefault();
  const paciente = pacienteSelect.value;
  const body = {
    paciente,
    fechaConsulta: document.getElementById("fecha").value,
    diagnostico: document.getElementById("diagnostico").value,
    tratamiento: document.getElementById("tratamiento").value,
    profesional: "Dra. Simulada",
    motivoConsulta: "Consulta general",
    observaciones: "N/A"
  };

  await fetch("http://localhost:3000/api/diagnosticos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });

  registrarAccesoBlockchain("guardar_diagnostico", paciente);
  formDiagnostico.reset();
  cargarHistorial();
});

document.getElementById("form-paciente").addEventListener("submit", async (e) => {
  e.preventDefault();
  const paciente = {
    nombre: document.getElementById("p-nombre").value,
    dni: document.getElementById("p-dni").value,
    fechaNacimiento: document.getElementById("p-fecha").value,
    genero: document.getElementById("p-genero").value,
    direccion: document.getElementById("p-direccion").value,
    contacto: document.getElementById("p-contacto").value,
    obrasocial: document.getElementById("p-os").value
  };

  await fetch("http://localhost:3000/api/pacientes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(paciente)
  });

  e.target.reset();
  cargarPacientes();
});

const fcChart = new Chart(document.getElementById("graficoFC"), {
  type: "line",
  data: {
    labels: [],
    datasets: [{
      label: "Ritmo cardíaco (bpm)",
      borderColor: "green",
      data: [],
      fill: false,
      tension: 0.4,
      pointRadius: 0,
      cubicInterpolationMode: 'monotone'
    }]
  },
  options: { animation: false }
});

const paChart = new Chart(document.getElementById("graficoPA"), {
  type: "line",
  data: {
    labels: [],
    datasets: [{
      label: "Presión arterial sistólica",
      borderColor: "blue",
      data: [],
      fill: false,
      tension: 0.4,
      pointRadius: 0,
      cubicInterpolationMode: 'monotone'
    }]
  },
  options: { animation: false }
});

function simularIoT() {
  const nombre = pacienteSelect.value;
  if (!nombre) return;

  const ritmo = Math.round(Math.sin(hora / (20 + Math.random() * 10)) * 7 + 75 + Math.random() * 4);
  const presion = Math.round(Math.cos(hora / (18 + Math.random() * 8)) * 6 + 125 + Math.random() * 3);
  const datos = datosIoTPorPaciente[nombre];

  if (datos.ritmo.length >= 1440) {
    datos.ritmo.shift();
    datos.presion.shift();
  }

  datos.ritmo.push(ritmo);
  datos.presion.push(presion);

  if (ritmo > 100) agregarEvento(`⚠️ Ritmo cardíaco elevado: ${ritmo} bpm`);
  if (ritmo < 50) agregarEvento(`⚠️ Ritmo cardíaco bajo: ${ritmo} bpm`);
  if (presion > 140) agregarEvento(`⚠️ Presión arterial elevada: ${presion} mmHg`);
  if (presion < 90) agregarEvento(`⚠️ Presión arterial baja: ${presion} mmHg`);

  hora++;
  actualizarGraficas();
}

function actualizarGraficas() {
  const nombre = pacienteSelect.value;
  if (!nombre || !datosIoTPorPaciente[nombre]) return;

  const ritmo = datosIoTPorPaciente[nombre].ritmo.slice(-rangoActual);
  const presion = datosIoTPorPaciente[nombre].presion.slice(-rangoActual);
  const etiquetas = ritmo.map((_, i) => `${i + 1}m`);

  fcChart.data.labels = etiquetas;
  paChart.data.labels = etiquetas;
  fcChart.data.datasets[0].data = ritmo;
  paChart.data.datasets[0].data = presion;

  fcChart.update();
  paChart.update();
}

setTimeout(() => {
  const li = document.createElement("li");
  li.classList.add("list-group-item", "text-danger");
  li.textContent = "⚠️ Evento clínico: Presión arterial elevada detectada";
  eventos.appendChild(li);
}, 30000);

setInterval(simularIoT, 60000);

pacienteSelect.addEventListener("change", () => {
  cargarHistorial();
  actualizarGraficas();
});

rangoSelect.addEventListener("change", () => {
  rangoActual = parseInt(rangoSelect.value);
  actualizarGraficas();
});

cargarPacientes();

function agregarEvento(texto) {
  const li = document.createElement("li");
  li.classList.add("list-group-item", "text-warning");
  li.textContent = `${texto} - ${new Date().toLocaleTimeString()}`;
  eventos.prepend(li);
}

// 🔗 Registro tipo blockchain
function registrarAccesoBlockchain(accion, paciente) {
  const usuario = localStorage.getItem("usuario");
  if (!usuario || !paciente) return;

  fetch("http://localhost:3000/api/eventos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ usuario, paciente, accion })
  });
}
