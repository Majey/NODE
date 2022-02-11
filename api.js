const http = require('http');
const source = require('./apiSourceFile');

// const data = {name:'Kevin', email:'kevin@yahoo.com', age: 30}
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    // res.write(JSON.stringify(data));
    res.write(JSON.stringify(source));
    res.end();
}).listen(3000);