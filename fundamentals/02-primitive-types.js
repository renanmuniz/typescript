"use strict";
//Type inference:
// TypeScript can automatically infer the variable type based on the value assigned to it.
// For example, if you assign a string value to a variable, TypeScript will infer that the variable is of type string.
// However, it is often a good practice to explicitly declare the variable type to improve code readability and maintainability.
// Examples:
const courseTitle = "TypeScript Bootcamp"; // TypeScript infers that courseTitle is of type string
const courseDuration = 10; // TypeScript infers that courseDuration is of type number
const isCourseActive = true; // TypeScript infers that isCourseActive is of type boolean
//Do inform function's parameters types:
function printCourseInfo(title, duration, isActive) {
    console.log(`Course Title: ${title}`);
    console.log(`Course Duration: ${duration} hours`);
    console.log(`Is Course Active: ${isActive}`);
}
printCourseInfo(courseTitle, courseDuration, isCourseActive);
// Primitive type number:
const lessonsCount = 10;
const price = 10.10;
const quantity = 2;
const total = price * quantity;
console.log("Total is: ", total); // Total is:  20.2
// Primitive type string:
const courseName = "TypeScript Bootcamp";
const instructor = "John Doe";
const message = `Welcome to ${courseName} by ${instructor}!`; // Attention to the need of backticks(``) for template literals.
console.log(message); // Welcome to TypeScript Bootcamp by John Doe!
// Primitive type boolean:
const isEnrolled = true;
const hasDiscount = false;
const canAccessCourse = isEnrolled && !hasDiscount;
console.log("Can access course: ", canAccessCourse); // Can access course:  true
// Primitive type null and undefined:
let courseDescription = null; // courseDescription can be a string or null
console.log("Course description: ", courseDescription); // Course description:  null
courseDescription = "This is a comprehensive TypeScript course.";
console.log("Course description: ", courseDescription); // Course description:  This is a comprehensive TypeScript course.
let optionalValue; // optionalValue can be a number or undefined
console.log("Optional value: ", optionalValue); // Optional value:  undefined
optionalValue = 42;
console.log("Optional value: ", optionalValue); // Optional value:  42
// Difference between null and undefined:
// null represents the intentional absence of any object value, while undefined represents a variable that has been
// declared but has not yet been assigned a value. In TypeScript, you can use both null and undefined to represent the
// absence of a value, but they are treated as distinct types.
//When to use null or undefined:
// Use null when you want to explicitly indicate that a variable should have no value. For example, if you have a
// function that returns an object, but there is a case where it cannot return a valid object, you might return null to
// indicate that there is no result.
// Use undefined when you want to indicate that a variable has not been assigned a value yet. For example, if you have a
// variable that will be assigned a value later in the code, you can initialize it with undefined to indicate that it is
// not yet ready for use.
// OBJECTS
// In TypeScript, objects are a collection of key-value pairs. They can be defined using object literals or by using
// interfaces and classes. Objects can have properties and methods, and they can be used to represent complex data structures.
// Example of an object literal:
const course = {
    title: "TypeScript Bootcamp",
    subTitle: "Learn the language fundamentals",
    duration: 10,
    isActive: true,
    instructor: {
        name: "John Doe",
        experience: 5
    },
    getCourseInfo: function () {
        return `${this.title} by ${this.instructor.name}`;
    }
};
console.log(course.title); // TypeScript Bootcamp
console.log(course.subTitle); // Learn the language fundamentals
console.log(courseDuration); // 10
console.log(course);
console.log(course.getCourseInfo()); // TypeScript Bootcamp by John Doe
