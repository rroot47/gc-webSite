import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ZfooterComponent } from './zfooter/zfooter.component';
import { HeaderComponent } from './header/header.component';
import { ContentHomeComponent } from './content-home/content-home.component';
import { MemberComponent } from './member/member.component';
import { SignupComponent } from './signup/signup.component';
import {HttpClientModule} from "@angular/common/http";
import { DebtComponent } from './debt/debt.component';
import { NavAdminComponent } from './nav-admin/nav-admin.component';
import { FormMemberComponent } from './form-member/form-member.component';
import { ExpenseComponent } from './expense/expense.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    ZfooterComponent,
    HeaderComponent,
    ContentHomeComponent,
    MemberComponent,
    SignupComponent,
    DebtComponent,
    NavAdminComponent,
    FormMemberComponent,
    ExpenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
