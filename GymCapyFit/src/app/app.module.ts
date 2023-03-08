import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as Instascan from 'instascan';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckInComponent } from './components/check-in/check-in.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegrolComponent } from './components/regrol/regrol.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { GymcapyfitService } from './services/gymcapyfit.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CheckInComponent,
    NavbarComponent,
    RegrolComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ZXingScannerModule,
    HttpClientModule
  ],
  providers: [GymcapyfitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
