/**
 * Created by Yueh-Ju on 2015/4/25.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('index', {title: 'Express'});
});

module.exports = router;
