var express      = require('express');
var path         = require('path');
var favicon      = require('static-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var load         = require('express-load');
//var mongoose     = require('mongoose');

//conexão com o mongodb
//mongoose.connect('mongodb://localhost/appestagio', function(err){
//    if (err) {
//        console.log("Error to connect from database: "+err);
//    } else {
//        console.log("Connection successfully completed");
//    }
//});

//var routes = require('./routes/index');
//var users  = require('./routes/users');

var app = express();

//middleware
var erros = require('./middleware/erros');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({ secret: 'appestagio2018' }));
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', routes);
//app.use('/users', users);

load('controllers').then('models').then('routes').into(app);

//middleware
app.use(erros.notfound);
app.use(erros.serverError);

app.listen(3000, function() {
    console.log('Express server listening on port 3000');
});
