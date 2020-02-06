/**
 *@author Chittaranjan Sardar
 */

 var http = require('http');

let host = '127.0.0.1';
let port = 8443;

var server = http.createServer((incomingMessage, serverResponse)=>{

    serverResponse.statusCode = 200;
    serverResponse.setHeader('Content-Type', 'text/json');
    serverResponse.end(JSON.stringify({message: 'Hello World!'}));
});

server.listen(port, host, ()=>{

    console.log(`Server is running at http://${host}:${port}`)
});