import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RestoComponent } from './components/resto/resto.component';
import { AddRestoComponent } from './components/add-resto/add-resto.component';
import { EditRestoComponent } from './components/edit-resto/edit-resto.component';
import { ViewRestoComponent } from './components/view-resto/view-resto.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RestoComponent,
    AddRestoComponent,
    EditRestoComponent,
    ViewRestoComponent,
    SpinnerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
