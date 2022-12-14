/* impure function */
// const createPersonWithAge = (age, person) => {
//     person.age = age;
//     return person;
// };

// const person = {
//     name: 'Bobo'
// };

// const newPerson = createPersonWithAge(18, person);

// console.log({
//     person,
//     newPerson
// });

/* pure function*/
const createPersonWithAge = (age, person) => {
    return { ...person, age };
};

const person = {
    name: 'Bobo'
};

const newPerson = createPersonWithAge(18, person);

console.log({
    person,
    newPerson
});