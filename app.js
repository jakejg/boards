var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('./connection');

var indexRouter = require('./routes/index');
var boardsRouter = require('./routes/boards');

var app = express();
const port = 3000;

// view engine setup
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', boardsRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


module.exports = app;
