export interface BookModel {
  title: string;
  author: string;
  isbn: string;
  pages: number;
  year: number;
  isCheckedOut: boolean;
  isCheckedOutBy: string;
  checkOutDate: Date;
  expireDate: Date;
}
