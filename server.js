var express = require('express');
var logger = require('morgan');
var path = require('path');

var app = express();
app.use(logger('dev'));

//Serve up HTML files for our view
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/dist')));


app.get('/', function(req, res) {
  res.render('./homepage.html');
});

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


app.use('/api', require('./numbers-api'));

var server = app.listen(3000);