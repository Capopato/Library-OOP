import { bookModel } from "../models/book.model";
import { add30Days } from "../utils/add30Days";

export class Book implements bookModel {
  title: string;
  author: string;
  isbn: string;
  year: number;
  pages: number;
  checkedOut: boolean;
  checkedOutAt: Date;
  checkedOutBy: string;
  expiresOn: Date;

  constructor(
    title: string,
    author: string,
    isbn: string,
    year: number,
    pages: number,
    checkedOut: boolean = false,
    checkedOutAt: Date = new Date(0),
    checkedOutBy: string = "",
    expiresOn: Date = new Date(0)
  ) {
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
