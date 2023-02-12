import { LibraryModel } from "../models/library.model";
import { Book } from "./book.class";
import { add30Days } from "../utils/add30Days.util";
import { addFine } from "../utils/addFine.util";
import { Member } from "./rentee.class";
import { dateNow } from "../utils/dateNow.utils";

/**
 * Library class which manages books and members
 */
export class Library implements LibraryModel {
  books: Book[];
  members: Member[];

  /**
   * Initializes books and members
   * @param books - List of books
   * @param members - List of members
   */
  constructor(books: Book[] = [], members: Member[] = []) {
    (this.books = books), (this.members = members);
  }

  /**
   * Checks out a book with a specified ISBN to a specified Member
   * @param isbn - ISBN of the book to be checked out
   * @param name - name of the Member who is checking out the book
   */
  checkOut(isbn: string, name: string): void {
    const book = this.books.find((book) => (book.isbn = isbn));
    if (book && book.isCheckedOut == false) {
      book.isCheckedOut = true;
      book.isCheckedOutBy = name;
      book.checkOutDate = dateNow();
      book.expireDate = add30Days(dateNow());
      console.log(`${book.title} is now checkOut and needs to be brought back before ${book.expireDate}`);
    } else {
      console.log("Book not found or already checked out.");
    }
  }

  addBook(book: Book) {
    /** adds a book to the catalog of the library */
    this.books.push(book);
  }

  addMember(member: Member) {
    /** adds a membersubscription to the catalog of the library */
    this.members.push(member);
  }

  /**
   * Checks in a book with a specified ISBN
   * @param isbn - ISBN of the book to be checked in
   */
  checkIn(isbn: string): void {
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
  checkExpireDate(book: Book): void {
    const Member = this.members.find((person) => person.name == book.isCheckedOutBy);
    const expireDate = new Date(book.expireDate);
    const checkOutDate = new Date(book.checkOutDate);
    const differenceInTime = Math.abs(expireDate.getTime() - checkOutDate.getTime());
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

    if (!Member) {
      console.log("Member not found");
      return;
    }
    if (differenceInDays > 30) {
      Member.accountBalance += addFine(book.isCheckedOutBy, differenceInDays);
      return;
    }
  }

  displayCatalog(): void {
    /** Display all books of which the status checkedOut = false */
    const books = this.books.filter((book) => book.isCheckedOut == false);
    console.log(books);
  }
}
