const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Pedido = sequelize.define('Pedido', {
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  customerName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = Pedido;
