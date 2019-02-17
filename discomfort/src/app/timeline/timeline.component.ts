import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  constructor(private data: DataService) { }

  challenges: any = []

  ngOnInit() {
    this.data.get('https://jsonplaceholder.typicode.com/todos/1').toPromise().then(response => {
      console.log("GOIHGOIHG");
      response.posts = [
        {
          title: '#supercoolchallenge',
          user: 'ultimate_fuckboi',
          date: 'Dec 19, 1992'
        },
        {
          title: '#dogChallenge',
          user: 'doggielover224',
          date: 'Feb 14, 2015'
        },
        {
          title: '#SlapYourPig',
          user: 'farmerboy97',
          date: 'Jan 5, 2019'
        }
      ];
      this.challenges = response.posts;
    })
  }

}
