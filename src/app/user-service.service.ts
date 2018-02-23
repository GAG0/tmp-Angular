import { Injectable } from '@angular/core';

@Injectable()
export class UserServiceService {
  private isUserLoggedIn;
  public username;

  constructor() {
    this.isUserLoggedIn = false;
   }
  setUserLoggedIn() {
  this.isUserLoggedIn = true;
  this.username = 'Admin';
}
  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }
}
