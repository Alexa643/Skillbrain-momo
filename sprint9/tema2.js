function removeProperty(obj, prop) {
    // Create a shallow copy of the object
    const newObj = { ...obj };

    // Delete the specified property from the new object
    delete newObj[prop];

    // Return the new object
    return newObj;
}

// Example object
const person = {
    name: "John",
    age: 30,
    occupation: "Engineer",
    city: "New York"
};

// Removing the 'city' property
const result = removeProperty(person, "city");

console.log(result); 
// Output: { name: 'John', age: 30, occupation: 'Engineer' }
