// Array of book objects
const books = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", isRead: true },
    { title: "Pride and Prejudice", author: "Jane Austen", isRead: false },
    { title: "1984", author: "George Orwell", isRead: true },
    { title: "Don Quixote", author: "Miguel de Cervantes", isRead: false }
];

// Function to iterate through the books and print the appropriate message
function displayBooks(books) {
    // Classic for loop
    for (let i = 0; i < books.length; i++) {
        let book = books[i];

        // Display title and author
        console.log(book.title + " by " + book.author);

        // Check if the book is read and print the appropriate message
        if (book.isRead) {
            console.log(`You have already read "${book.title}" by ${book.author}`);
        } else {
            console.log(`You need to read "${book.title}" by ${book.author}`);
        }
    }
}

// Example usage
displayBooks(books);
