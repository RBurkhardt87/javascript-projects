// Define your Book class here:

class Book {
    constructor(title, author, copyright, isbn, pageNumber, timesCheckOut, discarded = false) {
        this.title = title;
        this.author = author;
        this.copyright = copyright;
        this.isbn = isbn;
        this.pageNumber = pageNumber;
        this.timesCheckOut = timesCheckOut;
        this.discarded = discarded;
    }

    checkout(uses = 1) {
        this.timesCheckOut += uses;
    }
}

// Define your Manual and Novel classes here:

class Manual extends Book {
    constructor(title, author, copyright, isbn, pageNumber, timesCheckOut, discarded) {
        super(title, author, copyright, isbn, pageNumber, timesCheckOut, discarded);

    }

    discardedBook(currentYear) {
        if (currentYear - this.copyright > 5) {
            this.discarded = "Yes";
            console.log(`Manual has been discarded.`);
        }
    }

};


class Novel extends Book {
    constructor(title, author, copyright, isbn, pageNumber, timesCheckOut, discarded) {
        super(title, author, copyright, isbn, pageNumber, timesCheckOut, discarded);
    }

    discardedBook() {
        if (this.timesCheckOut > 100) {
            this.discarded = "Yes";
            console.log(`Book has hit its max checkout times and has been discarded.`);
        }
    }
}

// Declare the objects for exercises 2 and 3 here:

let novel1 = new Novel("Pride and Prejudice", "Jane Austen", 1813, 1111111111111, 432, 32, 'No');

let manual1 = new Manual('Top Secret Shuttle Building Manual', "Redacted", 2013, 0000000000000, 1147, 1, "No");

// console.log(novel1);
// console.log(manual1);

novel1.discardedBook;
manual1.discardedBook(2024);

console.log(novel1);
console.log(manual1.discardedBook);



// Code exercises 4 & 5 here:

novel1.checkout(5);
console.log(novel1);
