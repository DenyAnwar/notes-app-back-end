function multiply(num) {
    total = num * num; // akan menjadi variabel global karena tidak menggunakan let atau const
    return total;
}

let total = 9;
let number = multiply(20);

console.log(total); // output 400