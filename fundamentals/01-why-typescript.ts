const courseName = "Typescript Bootcamp V3";
//courseName = "abc123"; // This will cause an error because courseName is a constant



printCourseName(courseName);

function printCourseName(name :string) {
    console.log("The course name is  " + name.toUpperCase());
}

