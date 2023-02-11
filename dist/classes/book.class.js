"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(title, author, isbn, year, pages, checkedOut = false, checkedOutAt = new Date(0), checkedOutBy = "", expiresOn = new Date(0)) {
        (this.title = title),
            (this.author = author),
            (this.isbn = isbn),
            (this.year = year),
            (this.pages = pages),
            (this.checkedOut = checkedOut),
            (this.checkedOutAt = checkedOutAt),
            (this.checkedOutBy = checkedOutBy),
            (this.expiresOn = expiresOn);
    }
}
exports.Book = Book;
