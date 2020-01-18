import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarifComponent } from './pages/tarif/tarif.component';


const routes: Routes = [
  { path: '', component: TarifComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
