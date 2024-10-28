function letterCount(string, letter) {
    // Convert both the string and letter to lowercase to ignore case differences
    string = string.toLowerCase();
    letter = letter.toLowerCase();

    // Initialize a counter for the occurrences
    let count = 0;

    // Loop through each character in the string
    for (let i = 0; i < string.length; i++) {
        if (string[i] === letter) {
            count++;
        }
    }

    return count;
}

// Example usage
let string1 = "I love programming";
let letter1 = "g";
console.log(letterCount(string1, letter1));

let string2 = "I want to work in IT";
let letter2 = "t";
console.log(letterCount(string2, letter2));  
