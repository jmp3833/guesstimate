var express = require('express');
var app = express();

app.get('/question', function (req, res) {
  res.send({
    qid: 1234,
    question: "What is the population of New York City?",
    bottom: 5234567,
    top: 7973123
  });
});

app.post('/user_answer', function (req, res) {
  
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Guessing Game listening at http://%s:%s', host, port);
});