import { Injectable, EventEmitter } from '@angular/core';
import { Observable, observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { 

  }

  getBookList(){
    return this.http.get("http://localhost:3000/books").pipe(map((res:any)=>res));
  }

  getBookbyId(slug:string){
    return this.http.get(`http://localhost:3000/books/${slug}`).pipe(map((res:any)=>res));
  }

}
