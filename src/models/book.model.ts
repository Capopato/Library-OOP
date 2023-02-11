/**
 * Make schema with zod
 */

export interface bookModel {
  title: string;
  author: string;
  isbn: string;
  year: number;
  pages: number;
  checkedOut: boolean;
  checkedOutAt: Date;
  checkedOutBy: string;
  expiresOn: Date;
}
