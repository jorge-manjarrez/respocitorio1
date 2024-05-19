const db = require('../models/index')

const producto = db.productos;


module.exports = {
    create: async function(req,res){
        try {
            const {nombre, descripcion, precio } = res.body;
            await producto.create({nombre, descripcion, precio });

            res.send('Registro guardado exitosamente');
        }
        catch (error){
            console.error(error);
            res.status(500).send('Error creating user');
        }
    }
}
