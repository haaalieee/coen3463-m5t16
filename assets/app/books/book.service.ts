import { Injectable } from '@angular/core';
import { Book } from "./book";

@Injectable()
export class BookService {
  private  books: Book[] = [
    new Book('fdf','fdfdf','dfdfdf','dfdfdfd','dfdfdfd','dfdfdfd','https://images-na.ssl-images-amazon.com/images/I/51uj--DYaSL.jpg','Aug 10,2015', 'Aug 10,2015'),
    new Book('fdf','fdfdf','dfdfdf','dfdfdfd','dfdfdfd','dfdfdfd','https://images-na.ssl-images-amazon.com/images/I/51uj--DYaSL.jpg','Aug 10,2015', 'Aug 10,2015'),
  ];
  constructor() { }
  getBooks(){
    return this.books;
  }
}
