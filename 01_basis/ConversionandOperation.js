let score = undefined;
// console.log(typeof score)

let isNumber = Number(score);
// console.log(isNumber);

/* 
  44 => number = 44

  "ari" => NaN (not a number)

  true => 1 or false => 0

  ""  => 0

  null => 

  undefined  => NaN
*/

let boole = undefined;

let isBolean = Boolean(boole)
console.log(isBolean);


// Operations

// Arithmetic Operations:
let a = 5;
let b = 2;

let sum = a + b;       // 7
let difference = a - b;  // 3
let product = a * b;    // 10
let quotient = a / b;   // 2.5
let remainder = a % b;  // 1

a++;  // Increment a by 1
b--;  // Decrement b by 1

// Assignment Operations:

let x = 10;
x += 5;  // x is now 15
x -= 3;  // x is now 12
x *= 2;  // x is now 24
x /= 4;  // x is now 6

// Comparison Operations:

let p = 10;
let q = 5;

console.log(p == q);   // false
console.log(p === q);  // false
console.log(p != q);   // true
console.log(p !== q);  // true
console.log(p > q);    // true
console.log(p < q);    // false
console.log(p >= q);   // true
console.log(p <= q);   // false


// Logical Operations:

let isTrue = true;
let isFalse = false;

console.log(isTrue && isFalse);  // false
console.log(isTrue || isFalse);  // true
console.log(!isTrue);            // false


// Typeof Operator

let num = 42;
let str = 'Hello';
let bool = true;

console.log(typeof num);  // "number"
console.log(typeof str);  // "string"
console.log(typeof bool); // "boolean"

// string concatenation

let firstName = 'John';
let lastName = 'Doe';

let fullName = firstName + ' ' + lastName;  // "John Doe"


// Do not do this conversion

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);  //null converts to 0

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);



