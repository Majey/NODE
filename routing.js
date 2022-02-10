let http = require('http');
let fs = require('fs');

http.createServer((req, res) => {
    
    res.writeHead(200, { 'Content-Type':'text/html'});

    if (req.url === "/home.html" || req.url == "/") {
        var readStream = fs.createReadStream("home.html");
    } else if (req.url === "/blog.html") {
        var readStream = fs.createReadStream("blog.html");
    } else if (req.url === "/contact.html") {
        var readStream = fs.createReadStream("contact.html");
    } else {
        var readStream = fs.createReadStream("404.html");
    }

    readStream.pipe(res);

}).listen(3000);

console.log('Server is running on port 3000'); 