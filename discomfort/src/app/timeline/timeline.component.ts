import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  constructor(private data: DataService) { }

  posts = []

  ngOnInit() {
    this.data.get('https://jsonplaceholder.typicode.com/todos/1').toPromise().then(response => {
      response.posts = ['test1','test2'];
      this.posts = response.posts;
    })
  }

}
