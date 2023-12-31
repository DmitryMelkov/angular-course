import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { Post2Component } from './post2/post2.component';
import {Post4Component} from "./post4/post4.component";
import { FormsModule } from '@angular/forms';
import { Post3Component } from './post3/post3.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    Post2Component,
    Post4Component,
    Post3Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
