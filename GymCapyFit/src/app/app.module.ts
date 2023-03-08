import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckInComponent } from './components/check-in/check-in.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegrolComponent } from './components/regrol/regrol.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckInComponent,
    NavbarComponent,
    RegrolComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
