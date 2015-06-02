var express = require('express');
var fs = require('fs');
var marked = require('marked');

var app = express();

app.locals.require = require;

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'ejs');
app.set('views', process.cwd());

app.get('/', documentHandler);

app.get('/:path.md', documentHandler);

function documentHandler(request, response) {
  var path = './README.md';

  if (request.params.path) {
    path = path.replace('README', request.params.path);
  }

  response.render('layout', {
    content: marked(fs.readFileSync(path).toString())
  });
}

app.use(express.static(__dirname));

var listenPort = process.env.PORT || 3000;

app.listen(listenPort);
