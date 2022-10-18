import _ from 'lodash';

const myArray = [1, 2, 3, 4];

// let sum = 0;

// for (let i = 0; i < myArray.length; i++) {
//     sum += myArray[i];
// }

/* use reduce function */
// let sum = myArray.reduce((prev, curr) => {
//     return prev + curr;
// })

/* use lodash */
const sum = _.sum(myArray);

console.log(sum);