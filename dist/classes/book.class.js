"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nonFiction = exports.Fiction = exports.Book = void 0;
class Book {
    constructor(title, author, isbn, pages, year, 
    /** When 'isCheckedOut' = False the other values below are set to a standard value.
     * When 'isCheckedOut' = true the values will change
     */
    isCheckedOut = false, isCheckedOutBy = "", checkOutDate = new Date(0), expireDate = new Date(0)) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.pages = pages;
        this.year = year;
        this.isCheckedOut = isCheckedOut;
        this.isCheckedOutBy = isCheckedOutBy;
        this.checkOutDate = checkOutDate;
        this.expireDate = expireDate;
    }
}
exports.Book = Book;
class Fiction extends Book {
    constructor(title, author, isbn, pages, year, genre = "fiction"
    /** When 'isCheckedOut' = False the other values below are set to a standard value.
     * When 'isCheckedOut' = true the values will change
     */
    ) {
        super(title, author, isbn, pages, year);
        this.genre = genre;
    }
}
exports.Fiction = Fiction;
class nonFiction extends Book {
    constructor(title, author, isbn, pages, year, genre = "non-fiction"
    /** When 'isCheckedOut' = False the other values below are set to a standard value.
     * When 'isCheckedOut' = true the values will change
     */
    ) {
        super(title, author, isbn, pages, year);
        this.genre = genre;
    }
}
exports.nonFiction = nonFiction;
const fictionBook = new Fiction("The Great Gatsby", "F. Scott Fitzgerald", "12345", 1925, 207);
const nonfictionBook = new nonFiction("The Great Gatsby", "F. Scott Fitzgerald", "12345", 1925, 207);
