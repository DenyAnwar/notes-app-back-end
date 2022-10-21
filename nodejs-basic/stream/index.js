/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan 
 * menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */
const fs = require('fs');
const { resolve } = require('path');
const inputFile = resolve(__dirname, 'input.txt');
const outputFile = resolve(__dirname, 'output.txt');

const readbleStream = fs.createReadStream(inputFile, {
    highWaterMark: 15
});

const writableStream = fs.createWriteStream(outputFile);

readbleStream.on('readable', () => {
    try {
        writableStream.write(`${readbleStream.read()}\n`);
    } catch (error) {
        console.log(error);
    };
});

readbleStream.on('end', () => {
    writableStream.end();
});

