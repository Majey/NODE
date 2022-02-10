const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html'});
    let readStream = fs.createReadStream('index.html');
    readStream.pipe(res);
}).listen(3000);