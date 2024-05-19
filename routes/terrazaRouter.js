const express = require('express');

let router = express.Router();
let productcontrol = require('../controllers/productController');

router.route('/terraza').get(function(req,res){
    res.render('terraza');
}).post();



module.exports = router;