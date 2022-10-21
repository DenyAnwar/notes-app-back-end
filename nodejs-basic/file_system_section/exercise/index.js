const fs = require('fs');
const { resolve } = require('path');
const fileDestination = resolve(__dirname, 'notes.txt');

const fileReadCallBack = (error, data) => {
    if (error) {
        console.log('Gagal membaca berkas');
        return;
    };
    console.log(data);
};

// fs.readFile(resolve(__dirname, 'notes.txt'), 'UTF-8', fileReadCallBack);
fs.readFile(fileDestination, 'UTF-8', fileReadCallBack);