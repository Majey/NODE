const { parse } = require('path');
var url = require('url');

var webAddress = 'http://localhost:3000/index.html?name=majey&age=30';

var part = url.parse(webAddress, true);

console.log(part);
console.log(`${part.query.name} : ${part.query.age}`);
