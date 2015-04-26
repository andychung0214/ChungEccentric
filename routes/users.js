/**
 * Created by Yueh-Ju on 2015/4/25.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    res.send('respond with a resource');
});

module.exports = router;