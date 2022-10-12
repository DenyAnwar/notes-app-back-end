function greeting(name, language) {
    if (language === "English") {
        return `Good Morning ${name}!`;
    } else if  (language === "French") {
        return `Bonjour ${name}!`;
    } else if (language === "Vietnam") {
        return `Buổi sáng tốt lành ${name}`;
    } else {
        return `Selamat pagi ${name}`;
    }
}

let greetingMessage = greeting("Anh", "Vietnam");
console.log(greetingMessage);