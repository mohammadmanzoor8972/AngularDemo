import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() handler = new EventEmitter();

  private search = ""

  constructor() { }

  ngOnInit() {
  }

  searchHandler(input:HTMLInputElement){
    this.handler.emit({text:input.value})
  }

  submitHnadler(){
    event.preventDefault;
    this.handler.emit({text:this.search});
  }

}
