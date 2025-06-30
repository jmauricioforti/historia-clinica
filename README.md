#  Sistema de Historia Clínica Personal

Este sistema permite registrar, consultar y monitorear la historia clínica de pacientes, integrando trazabilidad de eventos clínicos mediante simulación blockchain y sensores IoT simulados. Fue desarrollado como Trabajo Final de Grado para la carrera de Licenciatura en Informática (Universidad Siglo 21).

---

##  Tecnologías utilizadas

* **Backend:** Node.js + Express
* **Base de datos:** MongoDB (modo local)
* **Frontend:** HTML5 + Bootstrap 5 + Chart.js
* **Trazabilidad:** Simulación tipo blockchain (hash + timestamp)
* **IoT:** Simulación de datos de presión, ritmo cardíaco y glucosa en tiempo real
* **Autenticación:** Login básico (usuario/contraseña en MongoDB)

---

##  Requisitos del entorno (Windows 10 o superior)

* Node.js instalado (v18+ preferido) → [https://nodejs.org/es/](https://nodejs.org/es/)
* MongoDB Community Server instalado → [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
* Navegador Chrome (u otro moderno)

Opcional:

* Visual Studio Code para editar archivos

---

##  Estructura del proyecto

```
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
```

---

##  Instalación y ejecución paso a paso (Windows)

### 1. Clonar el repositorio o descomprimir la carpeta `historia-clinica`

```bash
cd C:\Users\TuUsuario\Downloads\Historia_Clinica\historia-clinica
```

### 2. Instalar dependencias del backend

```bash
cd backend
npm install
```

### 3. Iniciar el servicio de MongoDB

Asegurate de que esté ejecutándose el servicio de Mongo. Podés hacerlo desde consola:

```bash
mongod
```

O bien desde la app "MongoDB Compass" si preferís interfaz.

### 4. Crear usuario de prueba (en mongosh)

```bash
mongosh
use historia-clinica

db.usuarios.insertOne({
  usuario: "admin@admin.com",
  passwordHash: "$2b$10$OHFj0SbF14RsBAYZyTgAb.rvfFh36OccakNnuZh4h6NlIb9lPkVVW", // admin123
  rol: "profesional"
})
```

### 5. Iniciar el backend

```bash
node app.js
```

Deberías ver:

```
Conectado a MongoDB
Servidor corriendo en puerto 3000
```

### 6. Ejecutar frontend

Abrí `frontend/index.html` con doble clic o arrastralo al navegador (Chrome recomendado).

---

## Funcionalidades implementadas

* [x] Login básico (usuario y contraseña)
* [x] Alta y selección de pacientes
* [x] Carga de diagnósticos clínicos con estructura completa
* [x] Visualización de historial médico
* [x] Simulación IoT de presión, frecuencia y glucosa
* [x] Gráficas dinámicas con etiquetas de hora
* [x] Eventos clínicos automáticos cada 30 segundos
* [x] Visualización enriquecida de eventos: paciente, sala, hora, tipo
* [x] Trazabilidad de accesos simulando blockchain

---

## Verificación técnica

### A. Verificar MongoDB

```bash
mongosh
use historia-clinica
db.pacientes.find().pretty()
```

### B. Verificar backend

```bash
node app.js
```

Ver que responde en:

```
http://localhost:3000/api/pacientes
```

---


## Créditos

Este proyecto fue desarrollado por Juan Mauricio Forti para el Trabajo Final de Licenciatura en Informática – Universidad Siglo 21, 2025.

---

## Licencia

Uso académico, libre para adaptar con fines educativos y sin fines de lucro. Inspirado en necesidades reales del sector salud en Argentina.
