import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBookComponent } from './book/search-book/search-book.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { UpdateBookComponent } from './book/update-book/update-book.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { BookDetailsComponent } from './book/book-details/book-details.component';
import { CreateBooksComponent } from './book/create-books/create-books.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBookComponent,
    BookListComponent,
    UpdateBookComponent,
    BookDetailsComponent,
    CreateBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
