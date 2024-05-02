import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username:any;
  password:any;
  status:any;
  checkLogin(){
    if(this.username=="admin" && this.password=="12345")
      {
        this.status="Login success"
      }
      else
      {
        this.status="Login Failed"
      }
  }

}
