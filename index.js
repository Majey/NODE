// const {area, cir} = require(`./circle`);
// const {name} = require("./data");


// console.log(`The area of the circle is ${area(7)}`);
// console.log(`The circumference of the circle is ${cir(7)}`);
// console.log(name)


// *****************************************************************************************************************

// const http = require("http");

// server = http.createServer(( req, res ) => {
//     res.writeHead(200, { "Content-Type": "text/plain"});
//     res.write("Hello Developers, we're getting the hang of NODE. ");
//     res.write("This is your current url: " + req.url);
//     res.end();
// }).listen(4000);

// *****************************************************************************************************************

const fs = require(`fs`);

let writeData = fs.createWriteStream('write.txt');
let data = "This is data written from the writeStream method";
writeData.write(data, 'utf8');
writeData.end();
writeData.on('finish', () => console.log("data written successfully!"));
writeData.on('error', (err) => console.log(err.stack));

// let readStream = fs.createReadStream("read.txt");
// let data = "";
// readStream.on('data', (chunk) => {
//     data += chunk;
// });
// readStream.on('end', () => console.log(data));
// readStream.on('error', (err) => console.log(err.stack));

// const text = fs.readFile(`./read.txt`, (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// } )

// const data = "This is data for a new file";
// fs.writeFile("write.txt", data, (err) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log("Successful. File updated");
// })

// const dir = "NFolder";
// const newDir = "NewF";
// fs.exists(dir, (exist) => {
//     if (exist) {
//         console.log("Directory already exists");
//     } else {
//         fs.mkdirSync(dir);
//         console.log("NFolder created!")
//     }
// })

// fs.rename(dir, newDir, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Directory renamed successfully")
//     }
// })

// fs.rmdir(newDir, (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log("Directory removed successfully!")
// }
// )



