const fs = require(`fs`);

let writeData = fs.createWriteStream('write.txt');
let data = "This is data written from the writeStream method";
writeData.write(data, 'utf8');
writeData.end();
writeData.on('finish', () => console.log("data written successfully!"));
writeData.on('error', (err) => console.log(err.stack));