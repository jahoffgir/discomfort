import { Component, OnInit } from '@angular/core';
import { LoginService} from "../login.service";
import {Log} from "@angular/core/testing/src/logger";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  constructor(private logInService: LoginService) {}
  userName = this.logInService.getUserName();

  ngOnInit() {
  }

  search() {
     // Get endpoint
  }


  logOut() {
    // Logs the user out of the
  }
}

