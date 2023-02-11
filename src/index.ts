import { Book } from "./classes/book.class";
import { Library } from "./classes/library.class";
import { Rentee } from "./classes/rentee.class";
import { currentDate } from "./utils/addCurrentDate";
import { addId } from "./utils/addRenteeId";

const library = new Library();

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "12345", 1925, 207);
const book2 = new Book("Moby Dick", "Herman Melville", "67890", 1851, 570);
const rentee1 = new Rentee(addId(), "Tom");
const rentee2 = new Rentee(addId(), "Willem");

library.addBook(book1);
library.addBook(book2);
library.addRentee(rentee1);
library.addRentee(rentee2);

library.checkOut(book2.isbn, rentee1.name);
