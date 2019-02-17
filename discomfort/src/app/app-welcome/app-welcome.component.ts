import { Component, OnInit } from '@angular/core';
import { LoginService} from "../login.service";


@Component({
  selector: 'app-welcome',
  templateUrl: './app-welcome.component.html',
  styleUrls: ['./app-welcome.component.css']
})
export class AppWelcomeComponent implements OnInit {

  constructor(public login: LoginService) {
  }

  reveal = false;

  ngOnInit() {
  }

  logIn(e) {
    // TODO make the ENDPOINT connection to make sure that the user name exists
    if (true) {
      this.login.setLoggedInUser(true)
      this.login.setUserName(e.target.value)
    }
  }
  showCreateAccount() {
    this.reveal = true;
  }
  create(e) {
    // TODO make ENDPOINT connection to make sure that the user name does not exist
    if (true) {
      this.login.setLoggedInUser(true)
      this.login.setUserName(e.target.value)
    }
  }
}
