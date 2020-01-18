import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { BookDetailComponent } from './book-detail.component';
import {  CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';


describe('BookDetailComponent', () => {
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDetailComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
      imports: [ ActivatedRoute, 
        HttpClientTestingModule, HttpClientModule],
      providers: [BookService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



});
