import { date } from "joi";
import { add30Days } from "../utils/add30Days";
import { Book } from "./book.class";
import { addFine } from "../utils/addFine";
import { Rentee } from "./rentee.class";
import { currentDate } from "../utils/addCurrentDate";

/**
 *   checkout(): void;
  checkIn(): void;
  checkExpireDate(): void;
 */

export class Library {
  private books: Book[] = [];
  private rentees: Rentee[] = [];

  /** Method to add a new book to books/library */
  public addBook(book: Book) {
    return this.books.push(book);
  }

  public addRentee(rentee: Rentee) {
    return this.rentees.push(rentee);
  }

  /** searchTerm van be title or isbn */
  public checkOut(isbn: string, name: string) {
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
      book.checkedOutAt = currentDate();
      book.expiresOn = add30Days(currentDate());
    } else {
      console.log("Book not found or alreadt rented out.");
    }
  }

  public checkIn(isbn: string) {
    const book = this.books.find((book) => book.isbn == isbn);
    if (book && book.checkedOut == true) {
      /** Run checkExpireDate to check if it is on time.  */
      console.log("Book found");
      console.log(book);
      this.checkExpireDate(isbn);
      book.checkedOut = false;
      book.checkedOutBy = "";
      book.checkedOutAt = new Date(0);
    } else {
      console.log("Book not found");
    }
  }

  checkExpireDate(isbn: string): Boolean {
    const book = this.books.find((book) => book.isbn == isbn);
    if (book) {
      const expiresOn = book?.expiresOn;
      if (expiresOn && expiresOn >= new Date(Date.now())) {
        const name = book.checkedOutBy;
        const fine = addFine(expiresOn);
        const rentee = this.rentees.find((r) => r.name == name);
        if (rentee) {
          rentee.account + fine;
          return true;
        } else {
          console.log("Rentee not found");
          return false;
        }
      }
    }
    return false;
  }
}
