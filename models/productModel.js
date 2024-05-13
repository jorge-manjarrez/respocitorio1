module.exports = (sequealize, DataTypes) =>{
    const Producto = sequelize.define("Producto", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primarykey: true,
            type: DataTypes.INTEGER,
        },
        nombre: {
            type: DataTypes.TEXT
        },
        descripcion:{
          type:  DataTypes.TEXT
        },
        precio: {
            type: DataTypes.INTEGER
        }


    });

    return Producto
}