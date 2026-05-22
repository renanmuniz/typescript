let title:string;
console.log("title: ", title); // title:  undefined

if(!title) {
    console.log("Title is not defined"); // Title is not defined
}

title = null;
console.log(title); // null

if(!title) {
    console.log("Title is null"); // Title is null
}

//undefined and null values are falsy

//How to avoid null related errors:
let course = null;

if(course?.textFields?.title) {
    console.log(`The title is: ${course.textFields.title}`);
}

const author = course?.textFields?.author ?? "No author provided";
console.log(author); // No author provided

logCourseAuthor(course); // Author information is not available.

function logCourseAuthor(course) {
    if(!course?.textFields?.author) {
        console.log("Author information is not available.");
        return;
    }
    console.log(course.textFields.author);
}

