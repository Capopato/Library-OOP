import { BookModel } from "../models/book.model";

export class Book implements BookModel {
  title: string;
  author: string;
  isbn: string;
  pages: number;
  year: number;
  isCheckedOut: boolean;
  isCheckedOutBy: string;
  checkOutDate: Date;
  expireDate: Date;
  constructor(
    title: string,
    author: string,
    isbn: string,
    pages: number,
    year: number,
    /** When 'isCheckedOut' = False the other values below are set to a standard value.
     * When 'isCheckedOut' = true the values will change
     */
    isCheckedOut: boolean = false,
    isCheckedOutBy: string = "",
    checkOutDate: Date = new Date(0),
    expireDate: Date = new Date(0)
  ) {
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

export class Fiction extends Book {
  genre: string;
  constructor(
    title: string,
    author: string,
    isbn: string,
    pages: number,
    year: number,
    genre: string = "fiction"
    /** When 'isCheckedOut' = False the other values below are set to a standard value.
     * When 'isCheckedOut' = true the values will change
     */
  ) {
    super(title, author, isbn, pages, year);
    this.genre = genre;
  }
}

export class nonFiction extends Book {
  genre: string;
  constructor(
    title: string,
    author: string,
    isbn: string,
    pages: number,
    year: number,
    genre: string = "non-fiction"
    /** When 'isCheckedOut' = False the other values below are set to a standard value.
     * When 'isCheckedOut' = true the values will change
     */
  ) {
    super(title, author, isbn, pages, year);
    this.genre = genre;
  }
}

const fictionBook = new Fiction("The Great Gatsby", "F. Scott Fitzgerald", "12345", 1925, 207);
const nonfictionBook = new nonFiction("The Great Gatsby", "F. Scott Fitzgerald", "12345", 1925, 207);
