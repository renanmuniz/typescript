//Interface
// Interfaces are a powerful way to define the structure of an object in TypeScript.
// They allow you to specify the properties and methods that an object should have, without providing the implementation details.
// This can help to ensure that your code is more consistent and easier to maintain.

interface Course {
    title:string,
    subtitle:string,
    lessonsCount:number
}

const course1: Course = {
    title: "TypeScript Bootcamp",
    subtitle: "Learn the language fundamentals",
    lessonsCount:5
}
const course2: Course = {
    title: "TypeScript Bootcamp v2",
    subtitle: "Learn the language fundamentals - 2nd version",
    lessonsCount:8
}

// Extending an interface:
interface Course {
    price?:number;
}

const course3: Course = {
    title: "TypeScript Bootcamp v2",
    subtitle: "Learn the language fundamentals - 2nd version",
    lessonsCount:8,
    price: 100.0
}

