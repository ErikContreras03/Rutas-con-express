const express = require('express');
const path = require('path');

// Crear router de Express
const router = express.Router();

// Ruta para el inicio
router.get('/1', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// Ruta para el generador
router.get('/generador', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'qr.html'));
});

// Exportar el router para usarlo en la aplicación principal
module.exports = router;