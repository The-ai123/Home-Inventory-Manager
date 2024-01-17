var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    switch(req.url){
        case "index":
            fs.readFile('index.html', function (err, data) {
                res.write(data);
                return res.end();
            });
        default:
            fs.readFile('index.html', function (err, data) {

                res.write(data);
                return res.end();
            });
    }

    //default


}).listen(8080);