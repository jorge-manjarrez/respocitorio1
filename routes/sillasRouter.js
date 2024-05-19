const express = require('express');

let router = express.Router();
let productcontrol = require('../controllers/productController');

router.route('/sillas').get(function(req,res){
    res.render('sillas');
}).post();



module.exports = router;