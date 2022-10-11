let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray);
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);
console.log("Panjang nilai myArray adalah " + myArray.length + ".");

myArray.push('JavaScript');
console.log(myArray);

myArray.pop(); // delete last element of array
console.log(myArray)

myArray.shift(); // delete first element of array
myArray.unshift('Apple'); // add first element of array 
console.log(myArray);

delete myArray[1];
console.log(myArray);

myArray.splice(2, 1); // delete array from index 2 as much 1 element
console.log(myArray);