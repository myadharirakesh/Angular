import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username:any;
  password:any;
  user:any;
  constructor(private router : Router){}
  checkLogin()
  {
    if(this.password=='12345'){
     this.user={
      username:this.username,
      password:this.password
     };
     this.router.navigateByUrl('/home')
    }
    else{
      alert("Invalid user or password")
    }
  }

}
