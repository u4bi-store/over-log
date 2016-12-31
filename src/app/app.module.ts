import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SearchOverlogComponent } from './search-overlog/search-overlog.component';
import { ViewOverlogComponent } from './view-overlog/view-overlog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchOverlogComponent,
    ViewOverlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
