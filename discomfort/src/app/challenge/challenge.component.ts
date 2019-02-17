import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {
  @Input() challenge: any;
  constructor() { }

  ngOnInit() {
  }

}
