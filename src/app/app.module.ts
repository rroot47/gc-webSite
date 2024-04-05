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
import {ClientService} from "./services/client.service";
import { SignupComponent } from './signup/signup.component';
import {HttpClientModule} from "@angular/common/http";
import { MemberListComponent } from './member/member-list/member-list.component';
import { MemberItemComponent } from './member/member-item/member-item.component';
import {MemberService} from "./services/member.service";

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
    MemberListComponent,
    MemberItemComponent
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
