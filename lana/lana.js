var express = require('express');
var app = express();
var country = require('./country.js');
var dealforecast = require('./dealforecast.js');
var publisherforecast = require('./publisherforecast.js');
var dealCountry = require('./dealcountry.js');
var bodyParser = require('body-parser');

// parse application/json
app.use(bodyParser.json({ type: 'application/*+json' }))

app.post('/', function(req, res) {
  var errMsg = 'please pass a valid payload :)';
  var context = req.body.requests[0]["facet-categories"][0];

  res.set("Content-Type", "application/vnd.lana.query.aggregatedResponse.V1+json");
  
  if (context.path === "publisherCountry") {
    res.json(country);
  } else if (context.path === "dealCountry") {
    res.json(dealCountry);
  } else if (context.path === "deal") {
    res.json(dealforecast);
  } else if (context.path === "dsl") {
    res.json(publisherforecast);
  } else {
    res.send(errMsg);
  }
});

app.listen(3000);


