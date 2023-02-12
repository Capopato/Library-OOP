import { Book } from "../classes/book.class";
import { Member } from "../classes/rentee.class";

export interface LibraryModel {
  books: Book[];
  members: Member[];
  addBook(book: Book): void;
  checkOut(isbn: string, name: string): void;
  checkIn(isbn: string): void;
  checkExpireDate(book: Book): void;
  displayCatalog(): void;
}
