import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username:any;
  password:any;
  user:any;
  constructor(private router:Router,private raki :UserService){}
  checkLogin() {
    this.user = this.raki.getUserByUsername();
    if (this.user && this.user.passWord ==this.password) {
      alert("Login is successful...");
    } else {
      alert("Login failed.");
    }
}
}
