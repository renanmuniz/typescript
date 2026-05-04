const courseName = "Typescript Bootcamp V2"

//courseName = "Typescript Bootcamp V3" // Error: Cannot assign to 'courseName' because it is a constant.

let courseName2 = "Typescript Bootcamp V3"
courseName2 = "Typescript Bootcamp V4" // No error, because courseName2 is declared with let.

var courseName3 = "Typescript Bootcamp V4"
courseName3 = "Typescript Bootcamp V5" // No error, because courseName3 is declared with var.

if(courseName) {
    const subtitle = "Learn TypeScript"
    let subtitle2 = "Learn TypeScript"
    var subtitle3 = "Learn TypeScript"

    printCourseName(courseName)
}

//console.log(subtitle) // Error: Cannot find name 'subtitle'. Because subtitle is block-scoped and cannot be accessed outside of the if block.
//console.log(subtitle2) // Error: Cannot find name 'subtitle2'. Because subtitle is block-scoped and cannot be accessed outside of the if block.
console.log(subtitle3) // No error, because subtitle3 is function-scoped and can be accessed outside of the if block.


printCourseName(courseName)

function printCourseName(name :string) {
    console.log("The course name is " + name.toUpperCase());
}

