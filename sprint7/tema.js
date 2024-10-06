// Function that checks if a number is divisible by 10 using if-else
function isDivisibleBy10(number) {
    if (number % 10 === 0) {
        return true;  // Return true if divisible by 10
    } else {
        return false; // Return false otherwise
    }
}

// Function that runs the program
function runProgram() {
    const number1 = 100;
    const number2 = 23;

    const result1 = isDivisibleBy10(number1);
    const result2 = isDivisibleBy10(number2);

    // Output: true
    console.log(result1);

    // Output: false
    console.log(result2);

    return 0; // Return a number instead of void
}

// Function that takes 4 arguments and displays the fortune
function tellFortune(numberOfChildren, partnerName, geographicLocation, jobTitle) {
    // Using template literals to format the output
    console.log(`You will be a ${jobTitle} in ${geographicLocation}, married to ${partnerName} and you will have ${numberOfChildren} children.`);
}

// Function that returns the day of the week based on the input number (in English)
function getDayOfWeek(dayNumber) {
    let dayName;
    switch (dayNumber) {
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        case 7:
            dayName = "Sunday";
            break;
        default:
            dayName = "Invalid day number";
    }
    return dayName;
}

// Call the functions to execute the program
runProgram();
tellFortune(2, "Daniel", "Germany", "Programmer");

// Get the day of the week based on input number (in English)

// Output: Monday
console.log(getDayOfWeek(1));

// Output: Friday 
console.log(getDayOfWeek(5)); 
