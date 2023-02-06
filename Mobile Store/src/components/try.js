var fs = require('fs');

fs.appendFile('data1.js', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
})