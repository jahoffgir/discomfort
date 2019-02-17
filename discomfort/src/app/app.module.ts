import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppSubmissionComponent } from './app-submission/app-submission.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppSubmissionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
