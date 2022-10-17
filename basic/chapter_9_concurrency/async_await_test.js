const getCoffee = () => {
    return new Promise((resolve, reject) => {
        const seeds = 9;
        setTimeout(() => {
            if (seeds >= 10) {
                resolve("Kopi didapatkan!");
            } else {
                reject("Biji kopi habis!");
            }
        }, 1000);
    }); 
};

/* using .then() */
// function makeCoffee() {
//     getCoffee().then(coffee => {
//         console.log(coffee);
//     });
// };

/* using asyinc-await */
// async function makeCoffee() {
//     const coffee = await getCoffee();
//     console.log(coffee);
// }

/* using asyinc-await and try..catch */
async function makeCoffee() {
    try {
        const coffee = await getCoffee();
        console.log(coffee);
    } catch (rejectionReason) {
        console.log(rejectionReason);
    }
}

makeCoffee();