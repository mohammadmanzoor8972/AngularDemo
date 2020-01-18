import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.scss']
})
export class UpvoteComponent implements OnInit {

  @Input() upvoted:boolean = false;
  @Input() upvotes:number;
  constructor() { }

  ngOnInit() {
  }

}
