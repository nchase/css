var express = require('express');

var app = express();

app.locals.require = require;

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');
app.set('views', process.cwd());

app.get('/', function(request, response) {
  response.render('index', {});
});

app.use(express.static(__dirname));

var listenPort = process.env.PORT || 3000;

app.listen(listenPort);
