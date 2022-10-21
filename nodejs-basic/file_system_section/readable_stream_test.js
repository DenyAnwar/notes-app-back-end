const fs = require('fs');
const { resolve } = require('path');

const readbleStream = fs.createReadStream(resolve(__dirname, 'article.txt'), {
    highWaterMark: 5
});

readbleStream.on('readable', () => {
    try {
        process.stdout.write(`[${readbleStream.read()}]`);
    } catch (error) {
        // catch the error when the chunk cannot be read
    };
});

readbleStream.on('end', () => {
    console.log('Done');
});