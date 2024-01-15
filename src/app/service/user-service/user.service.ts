import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  username: string = "";

  isUserLogged() {
    if(this.username && this.username.length > 0) {
      return true;
    }
    console.error("username is not valid")
    return false;
  }

  logUser(username: string) {
    this.username = username;
  }
}
