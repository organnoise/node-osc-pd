var forever = require('forever'),
	connect = require('connect'),
	directory = './WebApp/',
	open = require('open');

  child = new (forever.Monitor)('osctest2.js', {
  options: []
});

  child2 = new (forever.Monitor)('osctest3.js', {
  options: []
});

connect()
  .use(connect.static(directory))
  .listen(1337);

open('./OSC\ Control.pd');
open('http://localhost:1337');

child.start();
child2.start();