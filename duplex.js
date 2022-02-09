// source: https://youtu.be/qJL-sQbACm8?list=PLQcBFrxTul9IUbE7GACJCQ8O5W0dgd-yA
const { PassThrough, Duplex } = require("stream");
const { createReadStream, createWriteStream } = require("fs");

const readStream = createReadStream("vid.mp4");
const writeStream = createWriteStream("newVis.mp4");

class Throttle extends Duplex {
    constructor(time) {
        super();
        this.delay = time;
    }
    _read() {

    }
    _write( chunk, encording, callback ) {
        this.push(chunk);
        setTimeout(callback, this.delay);
    }
}

const tunnel = new PassThrough();
const throttle = new Throttle(500);

let amount = 0;
tunnel.on('data', (chunk) =>{ 
    amount += chunk.length;
    console.log('Bytes:', amount)
});

readStream.pipe(tunnel).pipe(writeStream);