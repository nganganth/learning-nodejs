// Some core modules:
// http: Launch a server, send requests
// https: Launch a SSL server
// fs, path, os

const http = require('http');

const server = http.createServer((req, res) =>{
    console.log(req.url, req.method, req.headers);
    // process.exit();
});

server.listen(3000, );