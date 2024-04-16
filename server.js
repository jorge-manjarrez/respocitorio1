const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
app.get('/', function(req,res){
    res.render('index');
   /* res.sendFile('index.html',{
        root:__dirname
    });*/
    app.get('/productos', (req, res) => {

        const productos = [
          { id: 1, nombre: 'Producto 1', precio: 50 },
          { id: 2, nombre: 'Producto 2', precio: 40 },
       
        ];
      
        res.render('productos', { productos });
        const socialLinks = document.querySelectorAll('.social-icons a');


socialLinks.forEach(link => {
  link.addEventListener('click', (event) => {
   
    const url = event.currentTarget.href;

    
    window.open(url, '_blank');
  });
});
        
      });
      app.get('/contactos', (req, res) => {
        res.render('contactos');
      });    

      
      document.addEventListener('DOMContentLoaded', function() {
        // Obtener todos los enlaces del aside
        const socialLinks = document.querySelectorAll('.social-icons a');
      
        // Agregar un evento de clic a cada enlace
        socialLinks.forEach(link => {
          link.addEventListener('click', (event) => {
            // Obtener la URL del enlace
            const url = event.currentTarget.href;
      
            // Abrir la URL en una nueva pestaña o ventana
            window.open(url, '_blank');
          });
        });
      });
});



app.listen(3000);