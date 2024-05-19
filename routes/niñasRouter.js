const express = require('express');

let router = express.Router();
let productcontrol = require('../controllers/productController');

router.route('/niñas').get(function(req,res){
    res.render('niñas');
}).post();



module.exports = router;