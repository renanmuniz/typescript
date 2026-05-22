"use strict";
let title;
console.log("title: ", title); // title:  undefined
if (!title) {
    console.log("Title is not defined"); // Title is not defined
}
title = null;
console.log(title); // null
if (!title) {
    console.log("Title is null"); // Title is null
}
//undefined and null values are falsy
//How to avoid null related errors:
let course = null;
if (course && course.title) {
    console.log(`Title is: ${course.title}`);
}
