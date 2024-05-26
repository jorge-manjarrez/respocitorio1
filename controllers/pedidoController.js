const Pedido = require('../models/Pedido');

exports.createPedido = async (req, res) => {
  try {
    console.log('Received data:', req.body); // Log para verificar los datos recibidos
    const { productName, customerName, phone, address } = req.body;
    const pedido = await Pedido.create({ productName, customerName, phone, address });
    console.log('Order created:', pedido); // Log para verificar que la orden se creó
    res.render('confirmarPedido', { pedido });
  } catch (error) {
    console.error('Error creating order:', error); // Log para ver detalles del error
    res.status(500).send('Error creating order');
  }
};
