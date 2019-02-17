import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppWelcomeComponent } from './app-welcome/app-welcome.component';
import { MainComponent } from './main/main.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppWelcomeComponent,
    MainComponent,
    TimelineComponent,
    ChallengeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
