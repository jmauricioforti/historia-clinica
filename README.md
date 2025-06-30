<<<<<<< HEAD
# 🩺 Sistema de Historia Clínica Personal

Este sistema permite registrar, consultar y monitorear la historia clínica de pacientes, integrando trazabilidad de eventos clínicos mediante simulación blockchain y sensores IoT para variables como presión arterial y ritmo cardíaco.

---

## 🚀 Tecnologías utilizadas

- **Backend:** Node.js + Express
- **Base de datos:** MongoDB (local)
- **Frontend:** HTML5 + Bootstrap 5 + Chart.js
- **Trazabilidad:** Simulación de eventos clínicos tipo blockchain
- **Autenticación:** Validación básica de profesionales
- **IoT:** Simulación de datos biométricos con ondas sinusoidales

---

## ⚙️ Requisitos

- Node.js instalado (versión recomendada: 18 o superior)
- MongoDB Community Server instalado y ejecutándose localmente
- Navegador moderno (Chrome, Edge, Firefox)

---

## 📁 Estructura del proyecto

historia-clinica/
├── backend/
│ ├── config/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── app.js
│ └── package.json
└── frontend/
├── index.html
├── script.js
└── style.css

yaml
Copiar
Editar

---

## 🛠 Instalación y ejecución

### 1. Clonar el repositorio o descomprimir el .zip

```bash
cd backend
2. Instalar dependencias
bash
Copiar
Editar
npm install
3. Iniciar MongoDB localmente
Asegurate de tener el servicio corriendo:

bash
Copiar
Editar
mongod
4. Iniciar el servidor backend
bash
Copiar
Editar
node app.js
Deberías ver:

arduino
Copiar
Editar
MongoDB conectado
Servidor backend escuchando en http://localhost:3000
5. Abrir el frontend
Abrí frontend/index.html en el navegador. Se conecta al backend automáticamente.

Usuario de prueba (autenticación)
Simulado con colección usuarios:

json
Copiar
Editar
{
  "email": "profe@demo.com",
  "clave": "123456",
  "rol": "profesional"
}
 Funcionalidades implementadas
Registro de pacientes
Diagnósticos con estructura completa

Carga de estudios clínicos

Trazabilidad de eventos (tipo blockchain)

Simulación de ritmo cardíaco y presión arterial

Evento clínico crítico simulado a los 30 segundos

Interfaz responsive y usable

Separación por módulos (MVC completo)

Pendientes para integración real
Autenticación con tokens JWT

Almacenamiento real de archivos de estudios

Firma digital o blockchain real con Ethereum/Web3

Licencia
Proyecto académico desarrollado para la Universidad Siglo 21 – Trabajo Final de Licenciatura en Informática.
=======
# historia-clinica
>>>>>>> 58bf97e08f35918ebdedb915d8a695337035e3e3
