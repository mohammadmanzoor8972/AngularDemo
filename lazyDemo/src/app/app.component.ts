import { Component } from '@angular/core';
import { Datastore } from './datastore.service';
import { Post } from './post.service';
import { JsonApiQueryData } from 'angular2-jsonapi';
import { post } from 'selenium-webdriver/http';
import { from} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lazyDemo';
  list = [1,2,3,4,5];
  call:any = []
  constructor(private datastore : Datastore){
    this.list.forEach((d:any)=>{
      //this.getPosts(d);
      this.call.push(
        this.datastore.findAll(Post, {
            page: { size: 10, number: 1 },
            filter: {
              title: 'My Post',
              id: d.id
            },
        }))
    })

   
  }
  getPostss(){
    this.datastore.findAll(Post, {
        page: { size: 10, number: 1 },
        filter: {
          title: 'My Post',
        },
    }).subscribe(
        (posts: JsonApiQueryData<Post>) => console.log(posts.getModels())
    );
}

  getPosts(){
    this.getSyncData().then((al)=>{
     // alert(al);
    }).finally(()=>{
      alert(23);
    })
  }

  getAsyncCall(){
    this.datastore.findAll(Post, {
      page: { size: 10, number: 1 },
      filter: {
        title: 'My Post',
      },
  }).subscribe(
      (posts: JsonApiQueryData<Post>) => console.log(posts.getModels())
  );
  }

getSyncData(){
  let promise = new Promise((resolve, reject) => {
   
     this.call.some(function(api,index){
    api.subscribe((d:Post)=>{
        console.log(d.jsonApiModels);
       
      })

      if(index==4){
        resolve(true);
        //debugger;
        return true;
       }
    });
  });
  return promise;
}




}
