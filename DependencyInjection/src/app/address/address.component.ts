import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent {
  villagename:any;
  mandal:any;
  district:any;
  state:any;
  pincode:any;
  status:any;
  constructor(private bs:Router){}
  submit(){
    this.status = `Address Details - ${this.villagename},${this.mandal},${this.district},${this.state},${this.pincode}`;

  }
}

