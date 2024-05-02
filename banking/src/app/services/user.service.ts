import { Injectable } from '@angular/core';
import { User } from './user';
import { of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

 
    users: User[] = [];
  
    constructor() {}
  
    addUser(user: User) {
      this.users.push(user);
    }
  
    getUserByUsername(){
      return of (this.users)
    }
  }
  