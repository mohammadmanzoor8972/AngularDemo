import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JsonApiModule } from 'angular2-jsonapi';
import { Datastore } from './datastore.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  
  BrowserModule,
    AppRoutingModule,
    JsonApiModule,
  ],
  providers: [Datastore],
  bootstrap: [AppComponent]
})
export class AppModule { }
