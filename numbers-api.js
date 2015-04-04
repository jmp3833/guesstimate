var express = require('express'),
    http = require('http');
    request = require('request');

var router = express.Router();
var alfredsMashapeAPIKey = 'lWfOrv6aupmshHtgAp1NNVFMccmAp1Z2Pn4jsnrs3fDZPK6oSd';

var mashapeUrl = 'https://numbersapi.p.mashape.com/';
var queryPath = 'random/trivia?';
// var fragmentParam = 'fragment=true&';
var jsonParam = 'json=true&';

/** 
 * Hit the Numbers API with a defined min and max range
 * Then generates a "fragment" which I prepend 'What is' to
 * Then serve this and the number up to the user
 * This should really be a native mobile app honestly.
 * https://www.mashape.com/divad12/numbers-1
 */

// http://localhost:3000/api/generate_question
router.get('/generate_question', function(req, res) {
  // Configure the request
  var options = {
      url: mashapeUrl + queryPath,
      method: 'GET',
      headers: {
        'X-Mashape-Key' : alfredsMashapeAPIKey
      },
      qs: {'fragment': 'true', 'json': 'true'}
  };

  // Start the request
  request(options, function (error, response, body) {
    if (error) {
      console.log(error);
      console.log('\n[ERROR] Give Up');
    }
    body = JSON.parse(body);
    if (body.text.slice(0,3) === 'the') {
      body.text = "What is " + body.text + "?"; 
    }
    res.send(body); // Return to frontend
  });
});

module.exports = router;