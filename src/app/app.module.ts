import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustomComponent } from './custom/custom.component';
import { CustomDatePipe } from './custom-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomComponent,
    CustomDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
