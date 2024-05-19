const express = require('express');

let router = express.Router();
let productcontrol = require('../controllers/productController');

router.route('/camastros').get(function(req,res){
    res.render('camastros');
}).post();



module.exports = router;