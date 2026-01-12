// ===============================
// 1. Variables & Data Types
// ===============================
let name = "Alice";
const age = 21;
var isStudent = true;

console.log(typeof name, typeof age, typeof isStudent);

// ===============================
// 2. Operators
// ===============================
let a = 10, b = 3;
console.log(a + b, a - b, a * b, a / b, a % b);

// ===============================
// 3. Conditional Statements
// ===============================
if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible");
}

// Ternary operator
let result = (a > b) ? "A is greater" : "B is greater";
console.log(result);

// ===============================
// 4. Loops
// ===============================
for (let i = 1; i <= 5; i++) {
    console.log("For loop:", i);
}

let i = 1;
while (i <= 3) {
    console.log("While loop:", i);
    i++;
}

// ===============================
// 5. Functions
// ===============================
function add(x, y) {
    return x + y;
}
console.log("Sum:", add(5, 7));

// Arrow function
const multiply = (x, y) => x * y;
console.log("Product:", multiply(4, 6));

// ===============================
// 6. Arrays
// ===============================
let numbers = [10, 20, 30, 40];

numbers.push(50);
numbers.pop();

numbers.forEach(num => console.log("Array value:", num));

// ===============================
// 7. Objects
// ===============================
let person = {
    name: "John",
    age: 25,
    greet: function () {
        console.log("Hello, my name is " + this.name);
    }
};

person.greet();

// ===============================
// 8. String Methods
// ===============================
let msg = "JavaScript Revision";
console.log(msg.toUpperCase());
console.log(msg.length);

// ===============================
// 9. Array Methods
// ===============================
let evenNumbers = numbers.filter(n => n % 20 === 0);
console.log("Filtered:", evenNumbers);

let doubled = numbers.map(n => n * 2);
console.log("Mapped:", doubled);

// ===============================
// 10. Exception Handling
// ===============================
try {
    let x = y + 1; // y is not defined
} catch (error) {
    console.log("Error caught:", error.message);
} finally {
    console.log("Execution completed");
}

// ===============================
// 11. DOM (Basic example)
// ===============================
// document.getElementById("demo").innerHTML = "Hello JavaScript!";
