function numberOfBooksRead(library) {
  // Check if the library object is provided and has a books property
  if (!library || !library.books || !Array.isArray(library.books)) {
    console.error("Invalid library object");
    return 0;
  }

  // Filter the array to get only the books that have been read
  const readBooks = library.books.filter(book => book.readingStatus === true);

  // Return the count of read books
  return readBooks.length;
}

// Example usage:
const library = {
  books: [
    { author: "Author1", title: "Book1", readingStatus: true },
    { author: "Author2", title: "Book2", readingStatus: false },
    { author: "Author3", title: "Book3", readingStatus: true },
    // ... other books
  ],
};

const result = numberOfBooksRead(library);
console.log(result); // Output: 2

