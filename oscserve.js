var forever = require('forever'),

  child = new (forever.Monitor)('osctest2.js', {
  options: []
});

  child2 = new (forever.Monitor)('osctest3.js', {
  options: []
});


child.start();
child2.start();