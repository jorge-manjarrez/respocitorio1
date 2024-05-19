const express = require('express');

let router = express.Router();
let productcontrol = require('../controllers/productController');

router.route('/comedor').get(function(req,res){
    res.render('comedor');
}).post();



module.exports = router;