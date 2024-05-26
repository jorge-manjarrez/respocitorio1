const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');

router.get('/carrito', (req, res) => {
  res.render('carrito');
});

router.post('/carrito', pedidoController.createPedido);

module.exports = router;
