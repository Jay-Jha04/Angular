import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CampgroundModule } from './campground.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CampgroundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
