import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpvoteComponent } from './upvote.component';
import {  CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
describe('UpvoteComponent', () => {
  let component: UpvoteComponent;
  let fixture: ComponentFixture<UpvoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpvoteComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpvoteComponent);
    component = fixture.componentInstance;
    component.upvoted=true;
    component.upvotes=323;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
