const pool = require('../config/db');

// Obtener todos los artículos
async function obtenerArticulos(req, res) {
  try {
    const [rows] = await pool.promise().query('SELECT * FROM articulos'); // <-- Aquí está el cambio
    res.json(rows);
  } catch (error) {
    console.error('Error al obtener los artículos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}


// Obtener un artículo por ID
const obtenerArticuloPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query('SELECT * FROM articulos WHERE id = ?', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Artículo no encontrado' });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el artículo' });
  }
};

// Crear un nuevo artículo
const crearArticulo = async (req, res) => {
  try {
    const { nombre, descripcion, precio, stock, imagen, categoria_id, marca, fecha_vencimiento, descuento } = req.body;
    const [result] = await pool.query(
      'INSERT INTO articulos (nombre, descripcion, precio, stock, imagen, categoria_id, marca, fecha_vencimiento, descuento) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [nombre, descripcion, precio, stock, imagen, categoria_id, marca, fecha_vencimiento, descuento]
    );
    res.json({ id: result.insertId, ...req.body });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el artículo' });
  }
};

// Actualizar un artículo
const actualizarArticulo = async (req, res) => {
  // ... (implementación similar a crearArticulo, pero usando UPDATE)
};

// Eliminar un artículo
const eliminarArticulo = async (req, res) => {
  // ... (implementación similar a obtenerArticuloPorId, pero usando DELETE)
};

module.exports = {
  obtenerArticulos,
  obtenerArticuloPorId,
  crearArticulo,
  actualizarArticulo,
  eliminarArticulo,
};
