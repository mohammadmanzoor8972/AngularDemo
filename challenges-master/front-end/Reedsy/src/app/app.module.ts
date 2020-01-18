import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {FormsModule} from '@angular/forms';   
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';
import { HeaderComponent } from './components/header/header.component';
import { UpvoteComponent } from './components/upvote/upvote.component';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './services/book.service';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailComponent,
    HeaderComponent,
    UpvoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ BookService],
  bootstrap: [AppComponent],
})
export class AppModule { }
