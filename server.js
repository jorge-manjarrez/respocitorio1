const express = require('express');
const app = express();
const path = require('path');

// Configuración de la vista
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/index', (req, res) => {
  res.render('index');
});
app.get('/productos', (req, res) => {
    res.render('productos');
});

app.get('/contactos', (req, res) => {
    res.render('contactos');
});  

app.get('/terraza', function(req, res) {
    res.render('terraza');
}); 
app.get('/sillas', function(req, res) {
  res.render('sillas');
  
}); 
app.get('/camastros', function(req, res) {
  res.render('camastros');
  
}); 
app.get('/comedor_de_exteriores', function(req, res) {
  res.render('comedor_de_exteriores');
  
}); 
app.get('/sala', function(req, res) {
  res.render('sala');
  
}); 
app.get('/habitacion', function(req, res) {
  res.render('habitacion');
  
}); 

app.get('/niños', function(req, res) {
  res.render('niños');
  
}); 
app.get('/niñas', function(req, res) {
  res.render('niñas');
  
}); 
// Iniciar servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
