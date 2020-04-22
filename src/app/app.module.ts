import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import{Routes, RouterModule } from '@angular/router';
import { LinkComponent } from './link/link.component';

const ROUTES:Routes = [
  { path:'input', component : InputComponent },
  { path:'list', component : ListComponent },
  { path:'edit', component : EditComponent }
]

@NgModule({
  imports:      [ 
  BrowserModule, 
  FormsModule,
  RouterModule.forRoot(ROUTES)
  ],
  declarations: [ AppComponent, HelloComponent, InputComponent, ListComponent, EditComponent, LinkComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
