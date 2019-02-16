import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppPostComponent } from './app-post/app-post.component';
import { AppWelcomeComponent } from './app-welcome/app-welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppPostComponent,
    AppWelcomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
