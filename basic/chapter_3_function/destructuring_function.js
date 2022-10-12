const user = {
    id: 13,
    displayName: 'deny',
    fullName: 'deny anwar',
};

function introduce({displayName, fullName}) {
    console.log(`${displayName} is ${fullName}`);
}

introduce(user);