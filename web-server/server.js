var express = require('express');
var app = express();
var PORT = 3000;

//app.get('/', function (req, res) {
  //res.send('Hello Express!');
//});

app.get('/about', function (req, res) {
  res.send('About Us');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
  console.log('Express web server started on port ' + PORT + '!');
});

