let score = "22ab";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);

console.log(typeof(valueInNumber));
console.log(valueInNumber)


// "33" => 33
//"33ab" => NaN
// true =>1 ; false=> 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


// 1 => true ; 0 => false

// "" => false
//"ajay" => true

let someNumber = 45
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);