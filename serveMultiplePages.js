const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {
    let q = url.parse(req.url, true);
    let filename = '.'+ q.pathname;
    fs.readFile(filename, (err, data) => {
        
        console.log(filename);

        if (err) {
            res.writeHead(400, {'Content-Type':'text/plain'});
            return res.end('Page not found')
        }
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    })
    // res.writeHead(200, { 'Content-Type': 'text/html'});
    // let readStream = fs.createReadStream('index.html');
    // readStream.pipe(res);
}).listen(3000);