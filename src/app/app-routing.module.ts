import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestoComponent } from './components/add-resto/add-resto.component';
import { EditRestoComponent } from './components/edit-resto/edit-resto.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RestoComponent } from './components/resto/resto.component';
import { ViewRestoComponent } from './components/view-resto/view-resto.component';

const routes: Routes = [
  {path: '', redirectTo: 'restos/admin', pathMatch: 'full'},
  {path: 'restos/admin', component : RestoComponent},
  {path: 'restos/add', component : AddRestoComponent},
  {path: 'restos/edit/:restoId', component : EditRestoComponent},
  {path: 'restos/view/:restoId', component : ViewRestoComponent},
  {path: '**', component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
