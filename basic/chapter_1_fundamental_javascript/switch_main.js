let language = "France"
let greeting = null

switch (language) {
    case "English":
        greeting = "Good Morning!";
        break;
    case "French":
        greeting = "Bonjour!";
        break;
    case "Japan":
        greeting = "Ohayou Gozaimasu!"
        break;
    default:
        greeting = "Selamat Pagi!";
}

console.log(greeting);