//const express = require(‘express’)
//const bodyParser = require(‘body-parser’)
//const app = express();
const climate = require('./climate/climate')
const tessel = require('tessel')

//app.use(bodyParser.urlencoded({extended: true}));

// app.get(‘/’, (req, res, next) => {
//    console.log(‘working’)
//    next();
// })

// app.post(‘/’, (req, res, next) => {
//    res.send(‘hello’)
//    console.log(‘hello’)
// })

// app.listen(3000, () => {
//    console.log(‘coffeebot is listening’);
// });

var twitter = require('twitter');

var twitterHandle = '@CoffeeBot1802';
// The status to tweet
var status = 'Hello ' + twitterHandle + '. This is your #Tessel 2 speaking.';

// These OAuth credentials are for the dummy @TesselTweet account
// Paste in your own OAuth details if you want to tweet from your own account
var twit = new twitter({
  consumer_key: 'PMTMSPyIpxyJozQ94HTuSmch5',
  consumer_secret: 'wIjaYpN4emaRmPq4OJLAVfpbHC1k5dkwAsbLE4DxrazVo2eZaj',
  access_token_key: '975832416777621505-JEz6vtDm6Rhvi2nHiNX8l5pgroUS38W',
  access_token_secret: 'sTDeFOfW0hPR44WjG4lSKQsvOLIkPPwVsg0lsWqXicBh6'
});

// Make a tweet!
twit.post('statuses/update', {status: status}, function(error, tweet, response){
  if (error) {
    console.log('error sending tweet:', error);
  } else {
    console.log('Successfully tweeted temp! ');
  }
});

// Consumer Key (API Key)    PMTMSPyIpxyJozQ94HTuSmch5
// Consumer Secret (API Secret)    wIjaYpN4emaRmPq4OJLAVfpbHC1k5dkwAsbLE4DxrazVo2eZaj

// Access Token    975832416777621505-JEz6vtDm6Rhvi2nHiNX8l5pgroUS38W
// Access Token Secret    sTDeFOfW0hPR44WjG4lSKQsvOLIkPPwVsg0lsWqXicBh6