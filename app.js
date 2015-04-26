var ip = 'localhost';
var port = 4444;

var express = require('express');
var path = require('path');
var favicon =require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

//var app = require('http');
//var ftp = require('ftp');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//app.use(express.favicon());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

app.use(function(req, res, next){
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

if(app.get('env') === 'development'){
    app.use( function(err, req, res, next){
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

app.use( function(err, req, res, next){
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
module.exports = app;
//app.set('port', process.env.PORT || 4444);
//
//var server = app.listen(app.get('port'), function() {
//    debug('Express server listening on port ' + server.address().port);
//});


//app.createServer(function(req, res){
//    res.writeHead(200,{'Content-Type': 'text/plain'});
//    res.end("Hello World \n");
//}).listen(port, ip);