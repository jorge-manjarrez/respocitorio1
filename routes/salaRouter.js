const express = require('express');

let router = express.Router();


router.route('/sala').get(function(req,res){
    res.render('sala');
}).post();



module.exports = router;