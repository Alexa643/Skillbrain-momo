function countVowels(str) {
    let count = 0;
    // List of vowels in lowercase and uppercase
    const vowelList = 'aeiouAEIOU';

    for (let char of str) {
        if (vowelList.includes(char)) {
            // Increment the counter if it's a vowel
            count++;
        }
    }

    // Return the total number of vowels
    return count;
}

// Example 1
let testString = "string de test";
// Output: 3
console.log(countVowels(testString));
