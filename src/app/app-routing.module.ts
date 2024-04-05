import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SigninComponent} from "./signin/signin.component";
import {MemberComponent} from "./member/member.component";
import {SignupComponent} from "./signup/signup.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'members', component: MemberComponent},
  {path : '', redirectTo : 'home', pathMatch : 'full'},
  {path : '**', redirectTo : 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
