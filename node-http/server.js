var http = require('http');
var path = require('path');
var fs = reuire('fs');
var hostname = 'localhost';
var port = 3000;

var server = http.createServer((req, res) =>{
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>Hello World!</h1></body></html>')
});

server.listen(port, hostname)