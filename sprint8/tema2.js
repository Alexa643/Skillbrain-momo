function sumArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

// Example 1
let array1 = [1, -5, 20, -34, 16, 29, 36, -4];
// Output: 59
console.log(sumArray(array1)); // Output: 59

// Example 2
let array2 = [3.45, -2.68, 356, -75.96, 64, 19.28];
// Output: 364.09000000000003
console.log(sumArray(array2));
