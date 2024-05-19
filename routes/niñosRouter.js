const express = require('express');

let router = express.Router();
let productcontrol = require('../controllers/productController');

router.route('/niños').get(function(req,res){
    res.render('niños');
}).post();



module.exports = router;