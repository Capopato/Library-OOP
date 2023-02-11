export interface libraryModel {
  books: [];
  rentess: [];
  addBook(): void;
  checkout(): void;
  checkIn(): void;
  checkExpireDate(): void;
  addRentee(): void;
}
