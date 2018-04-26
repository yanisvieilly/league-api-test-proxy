const express = require('express');
const request = require('request');

const app = express();

app.use('/', function(req, res) {
  const url = 'https://na1.api.riotgames.com' + req.url;

  res.setHeader('Access-Control-Allow-Origin', '*');

  req.pipe(request({ qs: req.query, uri: url })).pipe(res);
});

app.listen(8000, function () {
  console.log('Proxy listening on port 8000');
});