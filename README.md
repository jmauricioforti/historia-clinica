<<<<<<< HEAD
# 🩺 Sistema de Historia Clínica Personal

Este sistema permite registrar, consultar y monitorear la historia clínica de pacientes, integrando trazabilidad de eventos clínicos mediante simulación blockchain y sensores IoT para variables como presión arterial y ritmo cardíaco.

---

# Historia Clínica Personal

Este proyecto implementa un sistema web responsivo para la gestión de historias clínicas de pacientes crónicos, con autenticación segura, simulación de trazabilidad en blockchain y panel de monitoreo IoT.

## Tecnologías utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (Fetch API) para formularios y llamadas a la API.
- **Backend**: Node.js con Express.js para exponer rutas REST.
- **Base de datos**: MongoDB mediante Mongoose para el modelado de datos.
- **Autenticación**: bcryptjs para el hashing de contraseñas.
- **Monitorización IoT**: Simulación de envíos de datos fisiológicos (frecuencia cardíaca y presión arterial).
- **Trazabilidad**: Registro de hash y timestamp en cada operación relevante (simulado off-chain).

## Estructura de carpetas

```
historia-clinica/
├── backend/
│   ├── config/           # Configuración de base de datos y variables de entorno
│   ├── controllers/      # Lógica de negocio para rutas
│   ├── models/           # Esquemas de Mongoose (Pacientes, Usuarios)
│   ├── routes/           # Definición de endpoints de la API
│   └── server.js         # Punto de entrada del servidor Express
├── frontend/
│   ├── index.html        # Formulario de login y gestión de pacientes
│   ├── style.css         # Estilos básicos responsivos
│   └── script.js         # Llamadas a la API y manejo de respuestas
├── .env                  # Variables de entorno (no commiteado)
├── estructura_directorios.txt
└── README.md
```

## Modelos de datos

### Pacientes

- `nombre` (String)
- `dni` (String)
- `fechaNacimiento` (Date)
- `genero` (String)
- `direccion` (String)
- `contacto` (String)
- `obrasocial` (String)

### Usuarios

- `email` (String, único)
- `clave` (String, hash con bcrypt)
- `rol` (String)

## Endpoints principales de la API

### Autenticación

**POST** `/api/login`

- **Request** (JSON):
  ```json
  {
    "usuario": "<email>",
    "password": "<clave>"
  }
  ```
- **Response** (JSON):
  ```json
  {
    "mensaje": "Login correcto",
    "usuario": "<email>",
    "rol": "<rol>",
    "token": "<token-simulado>"
  }
  ```

### Gestión de Pacientes

- **GET** `/api/pacientes`  
  Devuelve lista de todos los pacientes.

- **GET** `/api/pacientes/:id`  
  Devuelve los datos de un paciente específico.

- **POST** `/api/pacientes`  
  Crea un nuevo registro de paciente. Body JSON con las propiedades del modelo.

- **PUT** `/api/pacientes/:id`  
  Actualiza los campos indicados de un paciente existente.

- **DELETE** `/api/pacientes/:id`  
  Elimina el registro de paciente.

## Instrucciones de instalación y ejecución

1. Clona este repositorio:
   ```bash
   git clone https://github.com/jmauricioforti/historia-clinica.git
   ```
2. Ingresa al directorio de backend:
   ```bash
   cd historia-clinica/backend
   npm install
   ```
3. Crea un archivo `.env` en la raíz de `backend/` con tu cadena de conexión a MongoDB:
   ```env
   MONGODB_URI=<tu_cadena_mongo>
   ```
4. Inicia el servidor:
   ```bash
   npm start
   ```
5. Abre `frontend/index.html` en tu navegador o sirve la carpeta `frontend/` desde un servidor estático.

## Uso básico

1. Inserta un usuario en la colección `usuarios` con la contraseña hasheada (ver README interno o ejemplo de script).
2. Accede al formulario de login en el frontend.
3. Una vez autenticado, gestiona pacientes (listado, alta, edición y baja) desde la misma interfaz.

---

*Este README ha sido actualizado para reflejar la estructura y el comportamiento reales del sistema según el código actual.*
