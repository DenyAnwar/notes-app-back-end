// const server = new Server({
//     host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com',
// });

// const cpuInformation = process.memoryUsage().heapUsed;
// const environment = process.env.NODE_ENV;
// console.log(cpuInformation);
// console.log(environment);

// const firstName = process.argv[2];
// const lastName = process.argv[3];

// console.log(`Hello ${firstName} ${lastName}`);


/* ------------------------------------------------------------------------------------ */
const coffee = require('./lib/coffee');
const { firstName, middleName, lastName } = require('./lib/user');

// mengimport core module http
const http = require('http');

console.log(coffee);
console.log(firstName);
console.log(middleName);
console.log(lastName);