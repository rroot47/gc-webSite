import {Component, OnInit} from '@angular/core';
import {MemberModel} from "../models/member.model";
import {MemberService} from "../services/member.service";

@Component({
  selector: 'app-debt',
  templateUrl: './debt.component.html',
  styleUrl: './debt.component.css'
})
export class DebtComponent implements OnInit{

  public members:MemberModel |any = [];
  page:number=0;
  size:number=5;
  totalPages!:number;
  isAuth= localStorage.getItem("isAuth");
  yearSelect: any;
  annualContribution: number = 60;

  constructor(private memberService:MemberService) {
  }

  ngOnInit(): void {
    this.yearSelect = 2024;
    this. getAllMembersDebts();
  }

  clickSelected(e: any) {
    this.yearSelect=e.target.value;
    this.page=0;
    this.annualContribution = this.yearSelect >= 2023 ? 50 : 60;
    this.getAllMembersDebts();
  }
  getAllMembersDebts(){
    return this.memberService.getAllMembersDebts(this.yearSelect ,this.page, this.size).subscribe(data=>{
      this.members= data;
      console.log(this.members)
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

  }

  gotoPagePrevious() {
    this.page = this.page - 1;
    this.getAllMembersDebts();
  }

  gotoPageNext() {
    this.page = this.page + 1;
    this.getAllMembersDebts();
  }

  gotoPage(p: number) {
    this.page = p;
    this.getAllMembersDebts();
  }
}
