import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { routing } from './app.routing';

import { HomeModule } from './home';
import { ContactModule } from './contact';
import { PortfolioModule } from './portfolio';
import { AboutModule } from './about';
import { IntroModule, IntroRouting } from './intro';

@NgModule({
  imports: [
    BrowserModule,
    HomeModule,
    ContactModule,
    PortfolioModule,
    AboutModule,
    IntroModule,
    IntroRouting,
    routing
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
