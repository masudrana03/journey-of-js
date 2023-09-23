let http = require("http");

let server = http.createServer(function (req, res) {
    res.end('My server is online');
});

server.listen(5050);

console.log('My server is listening');




