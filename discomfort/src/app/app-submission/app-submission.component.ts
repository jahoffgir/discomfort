import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-submission',
  templateUrl: './app-submission.component.html',
  styleUrls: ['./app-submission.component.css']
})
export class AppSubmissionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleSubmission(event) {
    
    // Get the target from the click action -- this is the submission
    var target = event.target || event.srcElement || event.currentTarget;
    var submissionDiv;

    // Get the class attribute of the target
    let classList = target.classList;
    var subClassList;
    
  	var targetClass = target.attributes.class.value;
    var submissionClass;

    // Check the classes of the target
    // First check if the target is the submissions div
    if(targetClass.indexOf("submission") == -1) {
      // if it's not submission, then we clicked a child element and need to get the parent div - submission
      submissionDiv = target.parentNode;
      subClassList = submissionDiv.classList;
      submissionClass = submissionDiv.attributes.class.value;
    } else {
      submissionDiv = target;
      subClassList = target.classList;
      submissionClass = targetClass;
    }

    // If the class includes the expanded class, remove the class
    if(submissionClass.indexOf("expanded") !== -1) {
      //submissionClass = submissionClass.split(" ")[0];
      subClassList.remove("expanded");
      //submissionClass.removeClass("expanded");
      console.log("Removed expanded class");
    } else {  
      // Otherise, add the expanded class
      subClassList.add("expanded");
      console.log(subClassList);
    }
   
  }

}
