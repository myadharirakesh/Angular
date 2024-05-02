import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  userId:any;
  userName:any;
  passWord:any;
  eMail:any;
  phoneNumber:any;
  savingAccBal:any;
  fixBal:any;
  newuser:any;
  constructor(private router: Router,private service :UserService) {}

  register() {
    this.newuser = {
      userId:this.userId,
      username: this.userName,
      passWord: this.passWord,
      eMail:this.eMail,
      phonenumber: this.phoneNumber,
      savingAccBal:this.savingAccBal,
      fixBal:1000
    };
    this.service.addUser(this.newuser); // Store user in UserService
    alert('Register Successful');
    this.router.navigateByUrl("/login");
  }
}