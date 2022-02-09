const fs = require('fs');
const zlib = require('zlib');

let gzip = zlib.createGzip();

let readStream = fs.createReadStream('transformInput.txt');
let writeStream = fs.createWriteStream('transformInput.txt.gz');

readStream.pipe(gzip).pipe(writeStream).on('finish', () => {
    console.log('ZIP file succesfully created!');
});