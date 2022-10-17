// let json = '{"name": "Yoda", "age": 20}';
// let json = '{ bad json }';
let json = '{"age": 20}';

try {
    let user = JSON.parse(json);

    if (!user.name) {
        throw new SyntaxError("'name' is required.");
    }

    console.log(user.name);
    console.log(user.age);
} catch (error) {
    // console.log(error.name);
    console.log(`JSON Error: ${error.message}`);
}