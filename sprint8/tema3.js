function reverseArray(numbers) {
    return numbers.slice().reverse();
}

// Example 1
let array1 = [1, -5, 20, -34, 16, 29, 36, -4];
// Output: [-4, 36, 29, 16, -34, 20, -5, 1]
console.log(reverseArray(array1));
