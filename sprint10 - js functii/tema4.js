const addNumber = (...numbers) => {
    // Use the reduce method to sum all numbers
    return numbers.reduce((sum, current) => sum + current, 0);
}

// Example usage
console.log(addNumber(1, 2, 3));
console.log(addNumber(1, 2, 3, 4, 5));
console.log(addNumber(10, 20, 30, 40));     
