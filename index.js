var express = require('express');
var app = express();
var gzippo = require('gzippo');

app.set('port', (process.env.PORT || 5000));

app.use(express.logger('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


 
  app.listen(process.env.PORT || 5000);