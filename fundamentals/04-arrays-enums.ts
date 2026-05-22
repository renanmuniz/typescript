const numbers = [1,2,3];

numbers.push(4);
//numbers.push("five"); // Error. When creating the array the type is defined.

//But you can define an array that receives multiple types of values:
const course = {
    title: "TypeScript Bootcamp",
    subTitle: "Learn the language fundamentals",
    duration: 10,
    isActive: true,
    instructor: { // This is a nested object representing the instructor of the course.
        name: "John Doe",
        experience: 5
    },

    getCourseInfo: function() {
        return `${this.title} by ${this.instructor.name}`;
    }
};
const mixedValues = [1, 2, "three", course];

//printing array:
numbers.forEach((value, index) => {
    console.log(numbers[index]);
})

console.log("---");

mixedValues.forEach((value, index) => {
    console.log(mixedValues[index]);
})