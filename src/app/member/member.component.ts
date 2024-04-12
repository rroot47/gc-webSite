import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MemberService} from "../services/member.service";
import {MemberModel} from "../models/member.model";

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrl: './member.component.css'
})
export class MemberComponent implements OnInit{


  public members:MemberModel |any = [];
  page:number=0;
  size:number=6;
  totalPages!:number;
  isAuth= localStorage.getItem("isAuth");


  constructor(private router:Router,
              private memberService:MemberService) {
  }

  ngOnInit(): void {
    if(this.isAuth==null){
      this.router.navigate(['/'])
    }
    this.onGetAllMembers();
  }

  onGetAllMembers() {
     this.memberService.getAllMembers(this.page,this.size).
      subscribe(data=>{
       this.members = data;
       this.members.members.sort((a:any, b:any)=>{
         if (a.lastName < b.lastName) {
           return -1;
         } else if (a.lastName > b.lastName) {
           return 1;
         } else {
           return 0;
         }
       })
       this.totalPages = this.members.totalPages;
    });
  }

  onViewMember(id:number) {
    this.router.navigate(['/single-membre', id]);
  }

  gotoPagePrevious() {
    this.page = this.page -1;
    this.onGetAllMembers();
  }

  gotoPage(p: number) {
    this.page = p;
    this.onGetAllMembers();
  }

  gotoPageNext() {
    this.page = this.page +1;
    this.onGetAllMembers();
  }
}
