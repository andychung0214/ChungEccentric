/**
 * Created by Yueh-Ju on 2015/4/25.
 */
var debug = require('debug')('ChungEccentric');
var app = require('../app');

app.set('port', process.env.PORT || 4444);

var server = app.listen(app.get('port'), function() {
    debug('Express server listening on port ' + server.address().port);
});