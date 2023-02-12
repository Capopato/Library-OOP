"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
const add30Days_1 = require("../utils/add30Days");
const addFine_1 = require("../utils/addFine");
/**
 * Library class which manages books and rentees
 */
class Library {
    /**
     * Initializes books and rentees
     * @param books - List of books
     * @param rentees - List of rentees
     */
    constructor(books, rentees) {
        (this.books = books), (this.rentees = rentees);
    }
    /**
     * Checks out a book with a specified ISBN to a specified rentee
     * @param isbn - ISBN of the book to be checked out
     * @param name - name of the rentee who is checking out the book
     */
    checkOut(isbn, name) {
        const book = this.books.find((book) => (book.isbn = isbn));
        if (book && book.isCheckedOut == false) {
            book.isCheckedOut = true;
            book.isCheckedOutBy = name;
            book.checkOutDate = new Date(Date.now());
            book.expireDate = (0, add30Days_1.add30Days)(book.checkOutDate);
            console.log(`${book.title} is now checkOut and needs to be brought back before ${book.expireDate}`);
        }
        else {
            console.log("Book not found or already checked out.");
        }
    }
    /**
     * Checks in a book with a specified ISBN
     * @param isbn - ISBN of the book to be checked in
     */
    checkIn(isbn) {
        const book = this.books.find((book) => (book.isbn = isbn));
        if (!book) {
            console.log("Book not found.");
            return;
        }
        book.isCheckedOut = false;
        book.isCheckedOutBy = "";
        this.checkExpireDate(book);
    }
    /**
     * Checks the expire date of a book and calculates fine if necessary
     * @param book - Book to be checked
     */
    checkExpireDate(book) {
        const rentee = this.rentees.find((person) => person.name == book.isCheckedOutBy);
        const expireDate = new Date(book.expireDate);
        const checkOutDate = new Date(book.checkOutDate);
        const differenceInTime = Math.abs(expireDate.getTime() - checkOutDate.getTime());
        const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
        if (!rentee) {
            console.log("Rentee not found");
            return;
        }
        if (differenceInDays > 30) {
            rentee.accountBalance += (0, addFine_1.addFine)(book.isCheckedOutBy, differenceInDays);
            return;
        }
    }
}
exports.Library = Library;
