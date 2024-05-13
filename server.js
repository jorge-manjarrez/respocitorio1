const express = require('express');
const app = express();
const path = require('path');

// Configuración de la vista
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/productos', (req, res) => {
    res.render('productos');
});

app.get('/contactos', (req, res) => {
    res.render('contactos');
});  

app.get('/terraza', function(req, res) {
    res.render('terraza');
}); 

// Iniciar servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
