import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientService} from "../services/client.service";
import {Router} from "@angular/router";
import {ClientModel} from "../models/client.model";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent  implements OnInit {

  signUpForm : FormGroup | any;
  clientModel!:ClientModel;

  constructor(private formBuilder:FormBuilder,
              private clientService:ClientService,
              private router:Router) {
  }

  ngOnInit(): void {
    this.initForm();
    this.clientModel = new ClientModel('', '', '', '', '');
  }

  initForm(){
    this.signUpForm = this.formBuilder.group({
      firstName : ['', [Validators.required]],
      lastName : ['', [Validators.required]],
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required,  Validators.pattern(/[0-9a-zA-Z]{6,}/), Validators.min(8)]],
      confirmPassword : ['', [Validators.required,  Validators.pattern(/[0-9a-zA-Z]{6,}/), Validators.min(8)]]
    });
  }

  signUp(){
    this.clientModel.firstName = this.signUpForm.get("firstName").value;
    this.clientModel.lastName = this.signUpForm.get("lastName").value;
    this.clientModel.email = this.signUpForm.get("email").value;
    this.clientModel.password = this.signUpForm.get("password").value;
    this.clientModel.confirmPassword = this.signUpForm.get("confirmPassword").value;

    this.clientService.addClient(this.clientModel).subscribe((data)=>{
      this.router.navigate(['/signin'])
    });
  }
}
