var http = require('http');  
var url = require('url');  
var fs = require('fs');  
var server = http.createServer(function(request, response) {  
    var path = request.url.toString();  
    // console.log(request.url);
    switch (path) {  
        case '/':  
            response.writeHead(200, {  
                'Content-Type': 'text/plain'  
            });  
            response.write("This is the root.");  
            response.end();  
            break;  
        case '/index.html':  
            fs.readFile(__dirname + "/../" + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error.message);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'text/html'  
                    });  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break;
        default:  
            response.writeHead(404);  
            response.write("This page don't exist - 404");  
            response.end();  
            break;  
    }  
});  
server.listen(8083);  