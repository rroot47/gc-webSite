import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientService} from "../services/client.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  signInForm : FormGroup | any;
  errorMessage: string | any;

  constructor(private formBuilder:FormBuilder,
              private clientService:ClientService,
              private router:Router) {
  }
  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.signInForm = this.formBuilder.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required,Validators.pattern(/[0-9a-zA-Z]{6,}/)]]// Validators.pattern(/[0-9a-zA-Z]{6,}/)
    });
  }

  signIn(){
    const email = this.signInForm.get('email').value;
    const password = this.signInForm.get('password').value;
    this.clientService.signIn(email, password).subscribe(
      (data:any)=>{
        localStorage.setItem("isAuth",String(true));
        this.router.navigate(['/admin/members'])
      });
  }
}
