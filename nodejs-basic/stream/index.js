/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan 
 * menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */
const fs = require('fs');
const { resolve } = require('path');
const destinationFile = resolve(__dirname, 'input.txt');

const readbleStream = fs.createReadStream(destinationFile, {
    highWaterMark: 15
});

readbleStream.on('readable', () => {
    try {
        process.stdout.write(`${readbleStream.read()}\n`);
    } catch (error) {
        // catch the error when the chunk cannot be read
    };
});

readbleStream.on('end', () => {
 
});