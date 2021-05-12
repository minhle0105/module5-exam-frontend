import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  listBooks: Book[] = [];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.bookService.getAllBooks().subscribe(books => {
      this.listBooks = books;
    })
  };

  deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe(() => {
      alert("Successfully removed!");
      this.getAll();
    }, e => {
      console.log(e);
      alert("Fail to remove");
    });
  };

}
