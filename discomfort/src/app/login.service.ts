import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  private isUserLoggedIn: boolean = false;
  private userName: string = '';

    public setLoggedInUser(flag) { // you need set header flag true false from other components on basis of your requirements, header component will be visible as per this flag then
      this.isUserLoggedIn= flag;
    }

    public getUserLoggedIn(): boolean {
      return this.isUserLoggedIn;
    }

    public setUserName(userName: string) {
      this.userName = userName;
    }

    public getUserName() {
      return this.userName;
    }

}
