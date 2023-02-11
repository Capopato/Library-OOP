"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
const add30Days_1 = require("../utils/add30Days");
const addFine_1 = require("../utils/addFine");
const addCurrentDate_1 = require("../utils/addCurrentDate");
/**
 *   checkout(): void;
  checkIn(): void;
  checkExpireDate(): void;
 */
class Library {
    constructor() {
        this.books = [];
        this.rentees = [];
    }
    /** Method to add a new book to books/library */
    addBook(book) {
        return this.books.push(book);
    }
    addRentee(rentee) {
        return this.rentees.push(rentee);
    }
    /** searchTerm van be title or isbn */
    checkOut(isbn, name) {
        /**
         * find the book using the searchTerm.
         *  When book is found > change checkedOut boolean status to > true. It is automatically on false
         */
        const book = this.books.find((book) => book.isbn == isbn);
        const rentee = this.rentees.find((rentee) => rentee.name == name);
        if (book && !book.checkedOut && rentee) {
            console.log("Book found");
            book.checkedOut = true;
            book.checkedOutBy = rentee.name;
            book.checkedOutAt = (0, addCurrentDate_1.currentDate)();
            book.expiresOn = (0, add30Days_1.add30Days)((0, addCurrentDate_1.currentDate)());
        }
        else {
            console.log("Book not found or alreadt rented out.");
        }
    }
    checkIn(isbn) {
        const book = this.books.find((book) => book.isbn == isbn);
        if (book && book.checkedOut == true) {
            /** Run checkExpireDate to check if it is on time.  */
            console.log("Book found");
            console.log(book);
            this.checkExpireDate(isbn);
            book.checkedOut = false;
            book.checkedOutBy = "";
            book.checkedOutAt = new Date(0);
        }
        else {
            console.log("Book not found");
        }
    }
    checkExpireDate(isbn) {
        const book = this.books.find((book) => book.isbn == isbn);
        if (book) {
            const expiresOn = book === null || book === void 0 ? void 0 : book.expiresOn;
            if (expiresOn && expiresOn >= new Date(Date.now())) {
                const name = book.checkedOutBy;
                const fine = (0, addFine_1.addFine)(expiresOn);
                const rentee = this.rentees.find((r) => r.name == name);
                if (rentee) {
                    rentee.account + fine;
                    return true;
                }
                else {
                    console.log("Rentee not found");
                    return false;
                }
            }
        }
        return false;
    }
}
exports.Library = Library;
