const express = require('express');
const router = express.Router();
const articulosController = require('../controllers/articulosController');

// GET /api/articulos - Obtener todos los artículos
router.get('/', articulosController.obtenerArticulos);

// GET /api/articulos/:id - Obtener un artículo por ID
router.get('/:id', articulosController.obtenerArticuloPorId);

// POST /api/articulos - Crear un nuevo artículo
router.post('/', articulosController.crearArticulo);

// PUT /api/articulos/:id - Actualizar un artículo
router.put('/:id', articulosController.actualizarArticulo);

// DELETE /api/articulos/:id - Eliminar un artículo
router.delete('/:id', articulosController.eliminarArticulo);

module.exports = router;
