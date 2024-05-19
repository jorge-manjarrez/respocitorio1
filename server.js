const express = require('express');
const app = express();
const path = require('path');

// Configuración de la vista
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const contactosRouter = require('./routes/contactosRouter');
const productosRouter = require('./routes/productRouter');
const salaRouter = require('./routes/salaRouter');
const terrazaRouter = require('./routes/terrazaRouter')





// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
// Rutas

app.use(contactosRouter);
app.use(productosRouter);
app.use(salaRouter);
app.use(terrazaRouter);

app.get('/', function (req, res) {

  res.render("index")
});

// Iniciar servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
