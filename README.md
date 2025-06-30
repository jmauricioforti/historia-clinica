🩺 Sistema de Historia Clínica Personal

Este sistema permite registrar, consultar y monitorear la historia clínica de pacientes, integrando trazabilidad de eventos clínicos mediante simulación blockchain y sensores IoT simulados. Fue desarrollado como Trabajo Final de Grado para la carrera de Licenciatura en Informática (Universidad Siglo 21).

🚀 Tecnologías utilizadas

Backend: Node.js + Express

Base de datos: MongoDB (modo local)

Frontend: HTML5 + Bootstrap 5 + Chart.js

Trazabilidad: Simulación tipo blockchain (hash + timestamp)

IoT: Simulación de datos de presión, ritmo cardíaco y glucosa en tiempo real

Autenticación: Login básico (usuario/contraseña en MongoDB)

⚙️ Requisitos del entorno (Windows 10 o superior)

Node.js instalado (v18+ preferido) → https://nodejs.org/es/

MongoDB Community Server instalado → https://www.mongodb.com/try/download/community

Navegador Chrome (u otro moderno)

Opcional:

Visual Studio Code para editar archivos

📁 Estructura del proyecto

raíz/
├── backend/
│   ├── app.js                # Servidor principal Express
│   ├── routes/              # Rutas API REST
│   ├── models/              # Esquemas de Mongoose
│   ├── controllers/         # Lógica de negocio
│   └── config/              # Conexión MongoDB y .env
├── frontend/
│   ├── index.html           # Inicio del sistema
│   ├── login.html           # Pantalla de autenticación
│   ├── script.js            # Lógica cliente e IoT
│   └── style.css            # Estilos visuales
└── README.md

🛠 Instalación y ejecución paso a paso (Windows)

1. Clonar el repositorio o descomprimir la carpeta historia-clinica

cd C:\Users\TuUsuario\Downloads\Historia_Clinica\historia-clinica

2. Instalar dependencias del backend

cd backend
npm install

3. Iniciar el servicio de MongoDB

Asegurate de que esté ejecutándose el servicio de Mongo. Podés hacerlo desde consola:

mongod

O bien desde la app "MongoDB Compass" si preferís interfaz.

4. Crear usuario de prueba (en mongosh)

mongosh
use historia-clinica

db.usuarios.insertOne({
  usuario: "admin@admin.com",
  passwordHash: "$2b$10$OHFj0SbF14RsBAYZyTgAb.rvfFh36OccakNnuZh4h6NlIb9lPkVVW", // admin123
  rol: "profesional"
})

5. Iniciar el backend

node app.js

Deberías ver:

Conectado a MongoDB
Servidor corriendo en puerto 3000

6. Ejecutar frontend

Abrí frontend/index.html con doble clic o arrastralo al navegador (Chrome recomendado).

✅ Funcionalidades implementadas



🧪 Verificación técnica previa a la demo

A. Verificar MongoDB

mongosh
use historia-clinica
db.pacientes.find().pretty()

B. Verificar backend

node app.js

Ver que responde en:

http://localhost:3000/api/pacientes

📸 Demo sugerida paso a paso

Mostrar inicio backend y Mongo

Acceder a index.html

Login como admin@admin.com / admin123

Crear paciente nuevo

Cargar diagnóstico

Mostrar gráficas y cambiar el rango de tiempo

Ver evento clínico simulado a los 30s (formato: paciente, sala, tipo y hora)

Mostrar historial y datos del paciente

Confirmar trazabilidad generada (opcional)

📝 Créditos

Este proyecto fue desarrollado por Juan Mauricio Forti para el Trabajo Final de Licenciatura en Informática – Universidad Siglo 21, 2025.

📜 Licencia

Uso académico, libre para adaptar con fines educativos y sin fines de lucro. Inspirado en necesidades reales del sector salud en Argentina.

