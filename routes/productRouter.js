const express = require('express');

let router = express.Router();

router.route('/productos').get(function(req,res){
    res.render('productos');
}).post();



module.exports = router;