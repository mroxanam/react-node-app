// server/index.js
const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();

// Endpoint API
app.get("/api", (req, res) => {
  res.json({ message: "Hola desde el servidor!" });
});

// Servir archivos estáticos del build de React
const clientBuildPath = path.join(__dirname, "../client/build");
app.use(express.static(clientBuildPath));

// Cualquier otra ruta que no sea /api, devuelve index.html
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(clientBuildPath, "index.html"));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
