import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MemberService} from "../services/member.service";
import {Router} from "@angular/router";
import {ClientModel} from "../models/client.model";
import {MemberModel} from "../models/member.model";
import {ToastService} from "../services/toast.service";
import {AherantModel} from "../models/aherant.model";

@Component({
  selector: 'app-form-member',
  templateUrl: './form-member.component.html',
  styleUrl: './form-member.component.css'
})
export class FormMemberComponent implements OnInit{

  memberForm : FormGroup | any;
  newYears : [] | any

  constructor(private formBuilder: FormBuilder,
              private  memberService:MemberService,
              private router:Router,
              private toastService:ToastService) { }

  ngOnInit(): void {
    this.initFormUser();
  }

  initFormUser(){
    this.memberForm = this.formBuilder.group({
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      phone : ['', Validators.required],
      domicile : ['', Validators.required],
      amountMembership : ['', Validators.required],
      membership : this.formBuilder.array([])
    });
  }

  get getYears(){
    return this.memberForm.controls['membership'] as FormArray
  }

  addYeats(){
    this.newYears =  this.formBuilder.group({
      year:['', Validators.required],
      amount :['', Validators.required]
    });
    this.getYears.push(this.newYears);
  }

  resetYears(){
    this.getYears.removeAt(this.newYears)
  }

  addMember() {
    const firstName = this.memberForm.get('firstName').value;
    const lastName = this.memberForm.get('lastName').value;
    const phone = this.memberForm.get('phone').value;
    const domicile = this.memberForm.get('domicile').value;
    const amountMembership = this.memberForm.get('amountMembership').value;
    const membership = this.memberForm.get('membership').value ? this.memberForm.get('membership').value : [];

    const member = new AherantModel(firstName,lastName, phone,domicile,amountMembership,membership);
    this.memberService.saveMember(member).subscribe(data=>{
       this.memberForm.reset();
    })
  }

}


