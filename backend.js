// Importar dependencias necesarias
const express = require('express');       // Framework para crear el servidor y manejar rutas
const mongoose = require('mongoose');     // Librería para conectarse y trabajar con MongoDB ---SE VA A CAMBIAR POR NODE--
const bcrypt = require('bcrypt');         // Para encriptar y comparar contraseñas
const jwt = require('jsonwebtoken');      // Para generar y validar tokens JWT

// Crear la aplicación de Express
const app = express();

// Middleware para que Express entienda JSON en las peticiones
app.use(express.json());

// Conexión a la base de datos MongoDB (local en el puerto 27017)
mongoose.connect('mongodb://localhost:27017/miBase', {
  useNewUrlParser: true,      // Usa el nuevo parser de URLs
  useUnifiedTopology: true    // Manejo moderno de conexiones
});

// Definir el esquema de usuario (estructura de datos en MongoDB)
const UsuarioSchema = new mongoose.Schema({
  correo: { type: String, required: true, unique: true }, // Campo correo obligatorio y único
  clave: { type: String, required: true }                 // Campo clave obligatorio
});

// Crear el modelo de usuario basado en el esquema
const Usuario = mongoose.model('Usuario', UsuarioSchema);

// Clave secreta para firmar y validar los JWT
const SECRET = "miClaveSuperSecreta";

// -------------------- RUTA DE REGISTRO --------------------
app.post('/registro', async (req, res) => {
  const { correo, clave } = req.body; // Recibe correo y clave del cliente

  // Encriptar la clave antes de guardarla
  const claveHash = await bcrypt.hash(clave, 10);

  try {
    // Crear nuevo usuario con correo y clave encriptada
    const nuevoUsuario = new Usuario({ correo, clave: claveHash });
    await nuevoUsuario.save(); // Guardar en MongoDB
    res.json({ mensaje: "Usuario registrado correctamente" });
  } catch (error) {
    res.status(400).json({ error: "Error al registrar usuario" });
  }
});

// -------------------- RUTA DE LOGIN --------------------
app.post('/login', async (req, res) => {
  const { correo, clave } = req.body; // Recibe correo y clave del cliente

  // Buscar usuario en la base de datos
  const usuario = await Usuario.findOne({ correo });
  if (!usuario) return res.status(401).json({ error: "Usuario no encontrado" });

  // Comparar clave ingresada con la clave encriptada guardada
  const claveValida = await bcrypt.compare(clave, usuario.clave);
  if (!claveValida) return res.status(401).json({ error: "Clave incorrecta" });

  // Generar token JWT con datos del usuario
  const token = jwt.sign(
    { id: usuario._id, correo: usuario.correo }, // Payload (datos dentro del token)
    SECRET,                                      // Clave secreta para firmar
    { expiresIn: "1h" }                          // Expiración del token (1 hora)
  );

  // Enviar token al cliente
  res.json({ mensaje: "Login exitoso", token });
});

// -------------------- RUTA PROTEGIDA --------------------
app.get('/perfil', (req, res) => {
  // Obtener token del encabezado Authorization
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(" ")[1]; // Formato: "Bearer <token>"

  if (!token) return res.status(403).json({ error: "Token requerido" });

  try {
    // Verificar token con la clave secreta
    const verificado = jwt.verify(token, SECRET);
    res.json({ mensaje: "Acceso permitido", usuario: verificado });
  } catch (error) {
    res.status(403).json({ error: "Token inválido o expirado" });
  }
});

// -------------------- INICIAR SERVIDOR --------------------
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
