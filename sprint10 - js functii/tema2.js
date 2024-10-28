function getRandom(start, end) {
    // Generates a random number between start (inclusive) and end (exclusive)
    return Math.floor(Math.random() * (end - start)) + start;
}

// Example usage with numeric values:
let start = 5;
let end = 15;

let randomNumber = getRandom(start, end);
console.log("Random number between " + start + " and " + end + " is: " + randomNumber);

