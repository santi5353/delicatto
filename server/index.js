const express = require('express');
const cors = require('cors');
const pool = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Rutas de la API (las agregaremos en los siguientes pasos)
// ... (código anterior)

const articulosRoutes = require('./routes/articulos');
app.use('/api/articulos', articulosRoutes);


app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
