import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  constructor() { }

  userName = 'Name';

  ngOnInit() {
  }

  search() {
     // Get endpoint
  }

  getName() {
    this.userName = 'PLACEHOLDER';
  }
  logOut() {
    // Logs the user out of the
  }
}

