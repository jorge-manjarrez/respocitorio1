const express = require('express');

let router = express.Router();
let productcontrol = require('../controllers/productController');

router.route('/habitacion').get(function(req,res){
    res.render('habitacion');
}).post();



module.exports = router;