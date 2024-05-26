const express = require('express');

let router = express.Router();


router.route('/terraza').get(function(req,res){
    res.render('terraza');
}).post();



module.exports = router;