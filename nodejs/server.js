var http = require('http');
var staticServ = require('node-static');

var file = new staticServ.Server('.');

http.createServer(function(req, res){
    file.serve(req, res);
}).listen(8080);

console.log('Server running on porn 8080')
                  
                  