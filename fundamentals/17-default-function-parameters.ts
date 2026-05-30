//Default functions parameters:
// Default function parameters allow you to specify default values for function parameters.
// If a parameter is not provided when the function is called, the default value will be used.
// This can help simplify your code and make it more robust.

function divide(n1:number, n2:number):number {
    return n1 / n2;
}
console.log(divide(2,0)); // Output: Infinity

// To avoid this, we can use default parameters to provide a default value for n2:
function safeDivide(n1:number, n2:number = 1):number {
    return n1 / n2;
}
console.log(safeDivide(2)); // Output: 2

sendMessage("Hello, World!"); // Output: FAILED Sending message: Hello, World!
sendMessage("Hello, World!", 3); // Output: FAILED Sending message: Hello, World! (repeated 3 times)

function sendMessage(message:string, retry:number = 1) {
    let attempts = 1;
    while (attempts <= retry) {
        console.log(`Attempt #${attempts} to send message...`);
        let success = sender(message);
        if(!success) {
            attempts++;
        } else {
            return;
        }
    }
}

function sender(message:string):boolean {
    if(true) {
        console.log(`FAILED Sending message: ${message}`);
        return false;
    }
    return true;
}