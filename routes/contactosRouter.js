const express = require('express');

let router = express.Router();
let productcontrol = require('../controllers/productController');

router.route('/contactos').get(function(req,res){
    res.render('contactos');
}).post();



module.exports = router;