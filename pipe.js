const fs = require(`fs`);

// let readData = fs.createReadStream("output.txt");
// let writeData = fs.createWriteStream('input.txt');
// readData.pipe(writeData);
// console.log("Data copying successful");

//***************************************************************************************************************

// Get data input from terminal and write to a file
let writeData = fs.createWriteStream("terminal.txt");
process.stdin.pipe(writeData);
