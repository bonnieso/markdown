var fs = require("fs"),
    http = require("http"),
    url = require('url'),
    markdown = require( "markdown" ).markdown;

http.createServer(responseHandler).listen(8000);

function responseHandler(req, res) {
  if (req.url.match("fav")) {
    res.end("");
    return;
  }
  if (req.url === "/") {
    res.writeHead(200, {"Content-Type": "text/html"});
    var stuff = fs.readFileSync('index.html', 'utf8');
      console.log(stuff);
    res.end(stuff);
//      res.end(data);

  } 
  console.log(req.url);
  if (req.url.match("/markdown/")) {
    console.log("markdown");
    res.writeHead(200, {"Content-Type": "text/html"});
    var input = req.url.match(/markdown\/(.*)/)[1];
    var output = markdown.toHTML(decodeURI(input));
    console.log(output);
//    res.write(output);
    res.end(output);
  }



  res.end();
}
//      var stuff = fs.readFileSync('index.html', 'utf8');
//      console.log(stuff);
//      res.end(stuff);
//      //      console.log(data);
//    console.log( markdown.toHTML( "Hello *World*!" ) );