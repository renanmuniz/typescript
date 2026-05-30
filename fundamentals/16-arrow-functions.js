"use strict";
//Arrow Functions are a more concise syntax for writing function expressions. They are often used for short, simple
// functions and can help improve readability. Here’s how you can use arrow functions in TypeScript:
// Traditional function expression
function addTraditional(a, b) {
    return a + b;
}
// Arrow function expression
const addArrow = (a, b) => {
    return a + b;
};
// If the function body is a single expression, you can omit the curly braces and the return statement
const addArrowConcise = (a, b) => a + b;
// Example usage
console.log(addTraditional(2, 3)); // Output: 5
console.log(addArrow(2, 3)); // Output: 5
console.log(addArrowConcise(2, 3)); // Output: 5
//Another example:
function someCalculation(n1, n2) {
    const sum = (a, b) => a + b;
    return sum(n1, n2) / 2;
}
console.log(someCalculation(2, 3)); // Output: 2.5
// Arrow functions also have a lexical 'this' binding, which means they do not have their own 'this' context.
// Instead, they inherit 'this' from the surrounding scope. This can be particularly useful when working with callbacks
// or methods in classes. Here's an example:
class Counter {
    count = 0;
    // Using an arrow function to ensure 'this' refers to the Counter instance
    increment = () => {
        this.count++;
        console.log(this.count);
    };
}
const counter = new Counter();
counter.increment(); // Output: 1
counter.increment(); // Output: 2
// In the context of sending messages to Kafka, you can use an arrow function to define a simple message sender:
const sendToKafka = (topic, message) => {
    console.log(`Sending message: ${message} to Kafka topic: ${topic}`);
};
sendToKafka('publish-course-topic', '{title:"TypeScript Course", price:1000.0}');
