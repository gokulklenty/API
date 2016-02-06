var express = require('express');
var app = express.Router();
var siteTrack = require('../controller/sitetrack.server.controller.js');

/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
app.get('/data',siteTrack.postDetails);

module.exports = app;
