const user = {
    firstName: "Deny",
    lastName: "Anwar",
    age: 27,
    isJedi: true,
    "home world": "Earth 606",
};

const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray",
}

console.log(`Hello, my name is ${user.firstName} ${user.lastName}`);
console.log(`I'm ${user.age} years old`);
console.log(`I come from ${user["home world"]}`);

spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;
spaceship.class = "Light freighter";
delete spaceship.class; // delete property in object
console.log(spaceship);