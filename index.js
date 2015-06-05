require('babel/register');

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

app.get('/raw/:path.md', rawHandler);

app.get('/slides/:path.md', function(request, response) {
  response.render('slides.ejs', {
    options: JSON.stringify(Object.assign({
      center: false,
      dependencies: [
        { src: '/node_modules/reveal.js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: '/node_modules/reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: '/node_modules/reveal.js/plugin/highlight/highlight.js', async: true, condition: function() { return !!document.querySelector( 'pre code' ); }, callback: function() { hljs.initHighlightingOnLoad(); } },
        { src: '/node_modules/reveal.js/plugin/zoom-js/zoom.js', async: true },
        { src: '/node_modules/reveal.js/plugin/notes/notes.js', async: true }
      ]
    })),
    content: '/raw/' + request.params.path + '.md',
    printable: (typeof request.query['print-pdf'] !== "undefined")
  });
});

function rawHandler(request, response) {
  response.send(fs.readFileSync(request.params.path + '.md').toString());
}

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
