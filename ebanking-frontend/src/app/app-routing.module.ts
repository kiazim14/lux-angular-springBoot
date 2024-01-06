import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from "./customers/customers.component";
import { AccountsComponent } from './accounts/AccountsComponent';
import { NewCustomerComponent } from "./new-customer/new-customer.component";
import { CustomerAccountsComponent } from "./customer-accounts/customer-accounts.component";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path : "", redirectTo: '/home', pathMatch: 'full'},
  {path : "home",component : HomeComponent},
  {path : "signin",component : SigninComponent},
  {path : "signup",component : SignupComponent},
  {path : "customers",component : CustomersComponent},
  {path : "new-customer",component : NewCustomerComponent},
  {path : "customer-accounts/:id",component : CustomerAccountsComponent},
  {path : "accounts",component : AccountsComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
