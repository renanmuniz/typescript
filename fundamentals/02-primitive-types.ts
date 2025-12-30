// Number
const lessonsCount = 10; // number
const coursePrice = 29.99; // number
const discount = 2.00; // number

console.log("total = " + (coursePrice - discount));


// String
const title = "Typescript Bootcamp"; // string
const subtitle = 'Learn TypeScript from scratch!'; // string

const fullTitle = `${title}: ${subtitle}`; // string using template literals
console.log(fullTitle);

// Boolean
const isPublished = true; // boolean
if(isPublished) {
    console.log("The course is published.");
}

const author  = "John Doe"; // string
//author = 10; // This will cause an error because 'author' is declared as a string type.


printCourse("Typescript Bootcamp", "Learn TypeScript from scratch!", 10);

function printCourse(title: string, subtitle: string, lessonsCount: number) {
    const fullTitle = title + " - " + subtitle;
    console.log(fullTitle);
    console.log("Number of lessons: " + lessonsCount);
}


//Objects
const course = {
    title: "Typescript Bootcamp",
    subtitle: "Learn TypeScript from scratch!",
    lessonsCount: 10,
    isPublished: true
};

console.log(course);
console.log("Course name is: " + course.title);
//console.log(isActive); // This will cause an error because 'isActive' is not defined.

const courseAuthor = {
    name: "John Doe",
    age: 30,
    isInstructor: true
}

const courseWithAuthor = {
    title: "Typescript Bootcamp",
    subtitle: "Learn TypeScript from scratch!",
    lessonsCount: 10,
    isPublished: true,
    author: courseAuthor
};

console.log(courseWithAuthor);


