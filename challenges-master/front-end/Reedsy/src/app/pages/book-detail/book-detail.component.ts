import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  private book : any = {};
  constructor(private route: ActivatedRoute, private http:BookService) { }

  ngOnInit() {

    this.route.params.subscribe(parms => {
      console.log(parms);
      this.http.getBookbyId(parms.id).subscribe(resp=>{
        this.book = resp;
      })
    })
  }

}
