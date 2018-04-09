var dns = require('native-dns');
var util = require('util');

var question = dns.Question({
  name: 'www.google.com',
  type: 'A',
});


request = dns.resolve('microsoft.com', function (err, results) {
  results.forEach(function (result) {
    console.log(result);
  });
});

var start = Date.now();


req.on('message', function (err, answer) {
  answer.answer.forEach(function (a) {
    console.log(a.address);
  });
});

req.on('end', function () {
  var delta = (Date.now()) - start;
  console.log('Finished processing request: ' + delta.toString() + 'ms');
});

req.send();
