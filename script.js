// Script.js
// DOM Ready
document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded!");

    // Example: Add event listener to a button
    const button = document.getElementById("myButton");
    if (button) {
        button.addEventListener("click", () => {
            alert("Button clicked!");
        });
    }

    // Example: Change text content dynamically
    const heading = document.getElementById("mainHeading");
    if (heading) {
        heading.textContent = "Welcome to JavaScript Interaction!";
    }
});
