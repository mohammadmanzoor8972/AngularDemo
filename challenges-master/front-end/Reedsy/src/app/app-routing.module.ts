import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';
import { BookListComponent } from './pages/book-list/book-list.component';

const routes: Routes = [
{
  path:'',
  redirectTo: 'booklist',
  pathMatch: 'full'
},
{
  path:'booklist',
  component: BookListComponent
},
{
  path : 'book/:id',
  component: BookDetailComponent
}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
