const { createReadStream, createWriteStream } = require('fs');
const { Transform } = require('stream');

let readable = createReadStream('transformOutput.txt'); 
let writable = createWriteStream('transformInput.txt');

const transformToUpperCase = () => {
    return new Transform({
        transform(chunk, encording, callback){
            console.log(chunk)
            const uppercase = chunk.toString().toUpperCase();
            callback(null, uppercase);
        }
    })
}

const uppercase = transformToUpperCase();
readable.pipe(uppercase).pipe(writable);
console.log("Transform completed!")
