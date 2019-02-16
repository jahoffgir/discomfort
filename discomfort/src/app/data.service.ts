import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  get(url) : Observable<any> {
    return this.http.get(url)
  }

  post(data: any, url: string): Observable<any> {
    return this.http.post<any>(url,data);
  }

  handleError(functionName){
    console.log("Error in:" + functionName);
  }


  //THIS IS THE FORMAT THAT YOU SHOULD USE TO CALL THE BACKEND.
  //JUST PASS IN THE URL YOU WANT AND IT WILL RETURN A JSON OBJECT.
  // this.data.get(this.testUrl).subscribe(response => {
  //   post = reponse.posts;
  // })

  //THIS IS THE FORMAT FOR A POST REQUEST
  // this.data.post(data,'url').toPromise().then(function() {
  //    Here you can do whatever you want to after the post has gone through.
  // });


}
