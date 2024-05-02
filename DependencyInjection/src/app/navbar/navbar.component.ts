import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  username:any;
  user:any;
  constructor(private router:Router){}
  logout(){
    localStorage.removeItem("loggedInUser");
    this.router.navigateByUrl('');
  }
  ngOnInit(){
    if(localStorage.getItem("loggedInUser")){
      this.username
      this.user=localStorage.getItem("loggedInUser");
      this.username=JSON.parse(this.user).username;
    }
    else{
      this.router.navigateByUrl('');
    }
  }

}
