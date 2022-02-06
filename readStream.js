const fs = require(`fs`);

let readStream = fs.createReadStream("read.txt");
let data = "";
readStream.on('data', (chunk) => {
    data += chunk;
});
readStream.on('end', () => console.log(data));
readStream.on('error', (err) => console.log(err.stack));