const fs = require('fs');
const path = require('path');
const express = require('express');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// wire up routes
fs.readdirSync(path.join(__dirname, 'routes')).forEach(fileName => {
  app.use(
    /index/.test(fileName) ? '/' : `/${fileName.replace(/\.js$/, '')}`,
    require(path.join(__dirname, 'routes', fileName))
  )
});

module.exports = app;
