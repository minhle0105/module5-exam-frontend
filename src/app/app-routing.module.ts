import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from './book/book-list/book-list.component';
import {UpdateBookComponent} from './book/update-book/update-book.component';
import {BookDetailsComponent} from './book/book-details/book-details.component';
import {CreateBooksComponent} from './book/create-books/create-books.component';


const routes: Routes = [
  {
    path: 'books',
    component: BookListComponent
  },
  {
    path: 'books/details/:id',
    component: BookDetailsComponent
  },
  {
    path: 'books/createNewBook',
    component: CreateBooksComponent
  },
  {
    path: 'books/edit/:id',
    component: UpdateBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
