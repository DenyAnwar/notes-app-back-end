/* without callback */
// const orderCoffee = () => {
//     let coffee = null;
//     console.log("Sedang membuat kopi, silahkan tunggu...");
//     setTimeout(() => {
//         coffee = "Kopi sudah jadi!";
//     }, 3000);
//     return coffee;
// }

// const coffee = orderCoffee();
// console.log(coffee);

/* using callback */
const orderCoffee = callback => {
    let coffee = null;
    console.log("Sedang membuat kopi, silahkan tunggu...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi!";
        callback(coffee);
    }, 3000);
}

orderCoffee(coffee => {
    console.log(coffee);
});