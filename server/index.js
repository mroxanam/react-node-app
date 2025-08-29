// server/index.js
const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();

// Endpoint API
app.get("/api", (req, res) => {
  res.json({ message: "Hola desde el servidor!" });
});

// Cuando esté en producción, servir la app React
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
