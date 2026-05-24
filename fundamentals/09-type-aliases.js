"use strict";
// Type aliases:
// A type alias gives a custom name to a type so your code is easier to read.
function updateCourseStatus(status) {
    console.log(`Course status updated to: ${status}`);
}
updateCourseStatus("in progress"); // OK
updateCourseStatus("paused"); // Error: Argument of type '"paused"' is not assignable to parameter of type 'CourseStatus'
function createUser(user) {
    console.log(`User created: ${user.name} (${user.email})`);
}
createUser({ id: 1, name: "Alice", email: "alice@mail.com" }); // OK
createUser({ id: 2, name: "Bob", email: "bob@mail.com", age: 25 }); // Error: Object literal may only specify known properties, and 'age' does not exist in type 'User'
