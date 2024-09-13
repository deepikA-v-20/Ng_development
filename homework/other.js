function printMessage() {
    console.log("Message printed every 1000 ms");

    // Call the same function after 1000 ms (1 second)
    setTimeout(printMessage, 1000);
}

// Start the first call
setTimeout(printMessage, 1000);

// function fun(){
//     console.log("print");
//     setTimeout(fun,1000);
// }
// setTimeout(fun,1000);