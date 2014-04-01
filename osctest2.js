var express = require('express');
var app = express();
var osc = require('node-osc');

var client = new osc.Client('127.0.0.1', 3333);

app.get('/', function(req, res){
  res.send('On');
  client.send('/1', 1);
});

app.listen(3000);

