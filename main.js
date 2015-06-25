var fs = require("fs"),
    http = require("http"),
    url = require('url'),
    markdown = require( "markdown" ).markdown;

http.createServer(responseHandler).listen(process.env.PORT);

function responseHandler(req, res) {
  if (req.url.match("fav")) {
    res.end("");
    return;
  }
  if (req.url === "/") {
    res.writeHead(200, {"Content-Type": "text/html"});
    var stuff = fs.readFileSync('index.html', 'utf8');
    res.end(stuff);

  } 
  if (req.url.match("/markdown/")) {
    res.writeHead(200, {"Content-Type": "text/html"});
    var input = req.url.match(/markdown\/(.*)/)[1];
    var output = markdown.toHTML(decodeURI(input));
    res.end(output);
  }



  res.end();
}