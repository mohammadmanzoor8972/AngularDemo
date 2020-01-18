import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  constructor(private http:BookService) { }
  private bookList:any = [];
  ngOnInit() {
    this.http.getBookList().subscribe((resp)=>{
      this.bookList = [...resp.books]
      console.log(resp.books);
    //  this.bookList = [...resp]
    })
  }

  filterBook(e){
    const txt = e.text;
    this.http.getBookList().subscribe((resp)=>{
      this.bookList = [...resp.books].filter(book=>book.title.includes(txt))
    })
  }

}
