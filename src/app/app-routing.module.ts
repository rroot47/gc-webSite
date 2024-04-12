import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SigninComponent} from "./signin/signin.component";
import {MemberComponent} from "./member/member.component";
import {SignupComponent} from "./signup/signup.component";
import {DebtComponent} from "./debt/debt.component";
import {NavAdminComponent} from "./nav-admin/nav-admin.component";
import {FormMemberComponent} from "./form-member/form-member.component";
import {ExpenseComponent} from "./expense/expense.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'admin', component: NavAdminComponent, children:[
      {path: 'members', component: MemberComponent},
      {path: 'debts', component: DebtComponent},
      {path: 'membership', component: FormMemberComponent},
      {path: 'expense', component: ExpenseComponent}
    ]},
  {path : '', redirectTo : 'home', pathMatch : 'full'},
  {path : '**', redirectTo : 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
