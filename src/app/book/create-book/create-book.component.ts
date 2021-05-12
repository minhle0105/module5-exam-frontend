import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  book: Book = {};
  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  addNewBook(form: NgForm) {
    let newBook = form.value;
    console.log(newBook);
    this.bookService.createNewBook(newBook).subscribe(() => {
      alert("Successfully added");
      this.book = {};
    }, e => {
      console.log(e);
      alert("Fail to add");
    });
  }



}
