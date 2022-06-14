import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NairaComponent } from './naira/naira.component';
import { DollarComponent } from './dollar/dollar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, NairaComponent, DollarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
