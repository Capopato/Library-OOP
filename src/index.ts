import { Book, nonFiction, Fiction } from "./classes/book.class";
import { Library } from "./classes/library.class";
import { Member } from "./classes/rentee.class";
import { addId } from "./utils/addMemberId.utils";

const book1 = new nonFiction("The Great Gatsby", "F. Scott Fitzgerald", "12345", 1925, 207);
const book2 = new Fiction("Moby Dick", "Herman Melville", "67890", 1851, 570);
const member1 = new Member(addId(), "Tom");
const member2 = new Member(addId(), "Willem");

const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addMember(member1);
library.addMember(member2);

// console.log(book1);
// console.log(book2);
// library.displayCatalog();

library.checkOut(book1.isbn, member1.name);
console.log(book1);
