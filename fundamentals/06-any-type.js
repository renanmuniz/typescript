"use strict";
let lessonsCount = null;
lessonsCount = 5;
console.log(typeof lessonsCount); // number
lessonsCount = 'a';
console.log(typeof lessonsCount); // string
lessonsCount = true;
console.log(typeof lessonsCount); // boolean
lessonsCount = [1, 2, 3, 4, 5];
console.log(typeof lessonsCount); // object
lessonsCount = {
    test: ''
};
console.log(typeof lessonsCount); // object
console.log(sum(1, 2)); // 3
console.log(sum(1, 'two')); // 1two, because the + operator performs string concatenation when one of the operands is a string.
function sum(n1, n2) {
    return n1 + n2;
}
