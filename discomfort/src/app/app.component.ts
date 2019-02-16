import { Component } from '@angular/core';
import {LoginService} from "./login.service";
import { Globals} from "./globals";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'discomfort';

  constructor(public login: LoginService) {

  }

  getUserLogin() {
    return this.login.getUserLoggedIn();
  }
}
