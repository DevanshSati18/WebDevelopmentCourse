console.log("array")

const array = [1,2,3,4,5,6];

console.log(array[2]);

const array1 = new Array(1,2,3,4,5);
console.log(array1[3]);

const fruits = ["apple","banana"];
//how to add and remove elements in the array at different position 
console.log(fruits);
//add at end
fruits.push("mango");
console.log(fruits);
// remove from end
fruits.pop();
console.log(fruits);
// add at start
fruits.unshift("mango");
console.log(fruits);
//remove from start
fruits.shift();
console.log(fruits);

//Modification in an array
const fruits1 = ["Apple","Banana","Cherry"];
fruits1.splice(1,1,"Orange");

console.log(fruits1);
fruits1.unshift("mango");


const slicefruits = fruits1.slice(1,3)
console.log(fruits1);
console.log(slicefruits);



//Searching:

const fri = ["apple","banana","cherry"];

console.log(fri.indexOf("cherry"));

console.log(fruits.includes("orange"));


fri.forEach((fri) => console.log(fri+" is present in the inventory"));



//filteration:

const number = [1,2,3,4,5,6];

const largenum = number.filter((num) => num>3);
console.log(largenum);

//sort:

const numbers = [1,5,2,6,3,4];
console.log(numbers);
numbers.sort();

console.log(number);

const str = "Hello world";

const words = str.split("r");
console.log(words);