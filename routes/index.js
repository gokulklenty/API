var express = require('express');
var app = express.Router();
var siteTrack = require('../controller/sitetrack.server.controller.js');

/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
app.get('/test/', function(req, res, next) {
  res.render('test', { title: 'Express' });
});
app.post('/data',siteTrack.postDetails);
app.post('/getTrackingId',siteTrack.getTrackingId);


module.exports = app;
