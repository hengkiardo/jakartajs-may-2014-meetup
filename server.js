var static = require('node-static');

var fileServer = new static.Server('./');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    }).resume();
}).listen(4444);
console.log("> node-static is listening on http://127.0.0.1:4444");
