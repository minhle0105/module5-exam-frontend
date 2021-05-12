import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../../service/book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  book: Book = {};
  idToUpdate = -1;
  bookForm = new FormGroup( {
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl()
  })
  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.idToUpdate = +paramMap.get('id');
      this.getBookById(this.idToUpdate);
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
  };

  updateBookInfo(id: number) {
    let newBook = this.bookForm.value;
    this.bookService.updateBookInfo(id, newBook).subscribe(() => {
      alert("Successfully updated");
    }, e => {
      console.log(e);
      alert("Fail to update");
    })
  }

}
