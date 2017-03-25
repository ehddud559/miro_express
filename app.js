/**
 *  MIRO nodejs express quick start
 *  provider : GeekTree0101
 *  copyright(C) 2017 MIRO Internet of things team
 */

/**
 *  Import node.js module
 *  NOTE: import module for execute server application
 */
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// create express application
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

/**
 *  Import router
 *  NOTE: import your service on router
 */
var todoApplication  = require('./routes/todo');

/**
 *  enroll router
 *  NOTE: enroll your service on express main application
 */
app.use('/todo', todoApplication); 
// http://localhost:7777/todo를 웹브라우져로 실행시 routes/todo에 있는 todo.js가 실행된다.


/**
 *  Server Error Handler
 *  NOTE: server automatically error handler
 * 
 *  < basic >
 *  200, 203, ... 20X : OK
 *  404 : Network Error
 *  500 : Your server has problem, Fix bug
 */

//catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err['status'] || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
