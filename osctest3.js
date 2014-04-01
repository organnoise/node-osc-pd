var express = require('express');
var app = express();
var osc = require('node-osc');

var client = new osc.Client('127.0.0.1', 3333);

app.get('/', function(req, res){
  res.send('Off');
  client.send('/1', 0);
});

app.listen(3001);

