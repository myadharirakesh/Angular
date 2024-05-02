import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { FixeddepositeComponent } from './fixeddeposite/fixeddeposite.component';
import { SavingsaccountComponent } from './savingsaccount/savingsaccount.component';
import { TransferComponent } from './transfer/transfer.component';

const routes: Routes = [
  {path:'',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'user',component:UserdashboardComponent,
    children:[
      {path:'home',component:HomeComponent},
      {path:'fd',component:FixeddepositeComponent},
      {path:'savings',component:SavingsaccountComponent},
      {path:'transfer',component:TransferComponent}
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
