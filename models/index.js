const { noBoolOperatorAliases } = require('sequelize/lib/utils/deprecations');
const dbConfig = require('../config/dbConfig');
const {sequalize,DataTypes} = require('sequelize');

const sequalize = new sequalize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host:dbConfig.HOST,
        dialect:dbConfig.dialect,
        operatorAliases:false,
    }
)
try {
     sequelize.authenticate();
    console.log('La conexion se ha establecido correctamente.');
  } catch (error) {
    console.error('no se pudo establecer la conexion a la base de datos :', error);
  }
  const deb = {}
  db.Sequalize = Sequalize
  db.sequalize = sequalize

  db.productos = require('../models/productModel1')(sequalizel, DataTypes)
  db.sequalize.sync({force:false})

  module.exports = db 