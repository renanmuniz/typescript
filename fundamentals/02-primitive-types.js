// Number
var lessonsCount = 10; // number
var coursePrice = 29.99; // number
var discount = 2.00; // number
console.log("total = " + (coursePrice - discount));
// String
var title = "Typescript Bootcamp"; // string
var subtitle = 'Learn TypeScript from scratch!'; // string
var fullTitle = "".concat(title, ": ").concat(subtitle); // string using template literals
console.log(fullTitle);
// Boolean
var isPublished = true; // boolean
if (isPublished) {
    console.log("The course is published.");
}
var author = "John Doe"; // string
//author = 10; // This will cause an error because 'author' is declared as a string type.
printCourse("Typescript Bootcamp", "Learn TypeScript from scratch!", 10);
function printCourse(title, subtitle, lessonsCount) {
    var fullTitle = title + " - " + subtitle;
    console.log(fullTitle);
    console.log("Number of lessons: " + lessonsCount);
}
//Objects
var course = {
    title: "Typescript Bootcamp",
    subtitle: "Learn TypeScript from scratch!",
    lessonsCount: 10,
    isPublished: true
};
console.log(course);
console.log("Course name is: " + course.title);
//console.log(isActive); // This will cause an error because 'isActive' is not defined.
var courseAuthor = {
    name: "John Doe",
    age: 30,
    isInstructor: true
};
var courseWithAuthor = {
    title: "Typescript Bootcamp",
    subtitle: "Learn TypeScript from scratch!",
    lessonsCount: 10,
    isPublished: true,
    author: courseAuthor
};
console.log(courseWithAuthor);
