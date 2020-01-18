import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarifItemComponent } from './components/tarif-item/tarif-item.component';
import { HttpClientModule } from '@angular/common/http';
import { TarifComponent } from './pages/tarif/tarif.component';
import { TarifUploadDownloadComponent } from './components/tarif-upload-download/tarif-upload-download.component';

@NgModule({
  declarations: [
    AppComponent,
    TarifItemComponent,
    TarifComponent,
    TarifUploadDownloadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [TarifItemComponent, TarifComponent, TarifUploadDownloadComponent]
})
export class AppModule { }
