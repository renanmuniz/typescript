//Union types:

let identifier: string | number;

identifier = "abc123"
console.log(typeof identifier) // string

identifier = 2;
console.log(typeof identifier) // number

// Example of Union type in functions:
function printId(id: string | number) {
    if (typeof id === "string") {
        console.log(`ID as string: ${id.toUpperCase()}`);
    } else {
        console.log(`ID as number: ${id}`);
    }
}

printId("abc123"); // ID as string: ABC123
printId(456); // ID as number: 456


// Union for nullable types:
function getUserName(userId: number): string | null {
    if (userId === 1) {
        return "Alice";
    } else if (userId === 2) {
        return "Bob";
    } else {
        return null; // User not found
    }
}

getUserName(1); // "Alice"
getUserName(2); // "Bob"
getUserName(3); // null

