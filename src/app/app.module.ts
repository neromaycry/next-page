import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { routing } from './app.routing';

import { HomeModule } from './home';

@NgModule({
  imports: [
    BrowserModule,
    HomeModule,
    routing
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
