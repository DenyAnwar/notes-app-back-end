const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [favorites, others];
const allFavorites2 = [...favorites, ...others];

console.log(favorites);
console.log(...favorites);
console.log(allFavorites);
console.log(allFavorites2);

