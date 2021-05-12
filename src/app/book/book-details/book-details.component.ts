import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: Book = {};
  currentId: number = -1;
  bookForm = new FormGroup( {
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl()
  })
  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.currentId = +paramMap.get('id');
      this.getBookById(this.currentId);
    })
  }

  ngOnInit() {
  }

  get id() {
    return this.bookForm.get('id');
  }

  getBookById(id: number) {
    this.bookService.getBookById(id).subscribe(thisbook => {
      this.bookForm = new FormGroup({
        title: new FormControl(thisbook.title),
        author: new FormControl(thisbook.author),
        description: new FormControl(thisbook.description)
      })
    })
  }

}
