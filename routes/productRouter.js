const express = require('express');

let router = express.Router();
let productcontrol = require('../controllers/productController');

router.route('/productos').get(function(req,res){
    res.render('productos');
}).post();
router.route('/index').get(function(req,res){
    res.render('index');
}).post();



module.exports = router;