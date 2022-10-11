const profile = {
    firstName: "Deny",
    lastName: "Anwar",
    age: 27,
}

// let firstName = "Anh";
// let age = 27;
const {firstName, age, isMale = true} = profile;

// const {firstName, lastName, age} = profile;
// const {lastName} = profile

// console.log(firstName, lastName, age);
// console.log(lastName);

// // menginisialisasi nilai baru melalui destructuring object
// ({firstName, age} = profile);

console.log(firstName);
console.log(age);
console.log(isMale);