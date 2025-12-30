let courseName = "Typescript Bootcamp V3";

if(courseName) {
    printCourseName(courseName);
    const descriptionConst = "This course is all about Typescript";
    let descriptionLet = "This course is all about Typescript";
    var descriptionVar = "This course is all about Typescript";
}

//console.log("Description: " + descriptionConst); // This will cause an error because 'descriptionConst' is not defined in this scope.
//console.log("Description: " + descriptionLet); // This will cause an error because 'descriptionLet' is not defined in this scope.
console.log("Description: " + descriptionVar); // This will not cause an error because 'descriptionVar' is globally scoped.

function printCourseName(name :string) {
    console.log("The course name is  " + name.toUpperCase());
}

