const fs = require('fs');

/* async version */
const fileReadCallback = (error, data) => {
    if (error) {
        console.log('Gagal membaca berkas');
        return;
    };
    console.log(data); 
};

fs.readFile('todo.txt', 'UTF-8', fileReadCallback);

/* sync version */
const data = fs.readFileSync('todo.txt', 'UTF-8');
console.log(data);

