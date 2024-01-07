//shallow object copy

//join 
// slice and splice difference interview question

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = arr1.concat(arr2); // [1, 2, 3, 4, 5, 6]

let arr3 = [1, 2, 3];
arr3.push(4, 5); // arr is now [1, 2, 3, 4, 5]

let arr4 = [1, 2, 3];
let removedp = arr4.pop(); // arr is now [1, 2], removed is 3

let arr5 = [1, 2, 3];
let removeds = arr5.shift(); // arr is now [2, 3], removed is 1

let arr6 = [2, 3];
arr6.unshift(1); // arr is now [1, 2, 3]

// Returns a shallow copy of a portion of an array.
let arr7 = [1, 2, 3, 4, 5];
let sliced = arr7.slice(1, 4); // sliced is [2, 3, 4]

// Changes the contents of an array by removing or replacing elements
let arr8 = [1, 2, 3, 4, 5];
arr8.splice(2, 1, 'a', 'b'); // arr is now [1, 2, 'a', 'b', 4, 5]


let arr9 = [1, 2, 3, 4, 5];
let index = arr9.indexOf(3); // index is 2

let arr10 = [1, 2, 3, 4, 5];
let evenNumbers = arr10.filter(num => num % 2 === 0); // evenNumbers is [2, 4]

let arr = [1, 2, 3, 4, 5];
let squared = arr.map(num => num * num); // squared is [1, 4, 9, 16, 25]


// ********Spread Operator (up) ***********

let spreadArr = [...arr1,...arr2]  // gives combination of arr1 and arr2 and spread the value in the given array.


// flat method

let arrf = [1, 2, 3,[3,5,6,[687,98]]];
let arrorrignal = arrf.flat(Infinity);

//++++++++++ Array Special cases ++++++++++++++

Array.from({name: "Aryan"}) //create an array from the given argument in from


//Array.in,Array.isArray,Array.from


// ------------ Array Destruring in JS --------------

let numbers = [1, 2, 3];

// Destructuring assignment
let [a, b, c] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
