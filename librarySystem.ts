type BookTuple = [string, boolean];

const books: BookTuple[] = [
    ["The Great Gatsby", true],
    ["To Kill a Mockingbird", false],
    ["1984", true],
    ["Pride and Prejudice", false],
    ["The Catcher in the Rye", false]
];

let totalBooks = 0;
let borrowedBooks = 0;

for (const [title, isBorrowed] of books) {
    totalBooks += 1;
    if (isBorrowed) {
        borrowedBooks += 1;
        console.log(`${title} - Status: Borrowed`);
    } else {
        console.log(`${title} - Status: Available`);
    }
}

console.log(`Total Available Books: ${totalBooks - borrowedBooks}`);
console.log(`Total Borrowed Books: ${borrowedBooks}`);
