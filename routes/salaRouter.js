const express = require('express');

let router = express.Router();
let productcontrol = require('../controllers/productController');

router.route('/sala').get(function(req,res){
    res.render('sala');
}).post();



module.exports = router;