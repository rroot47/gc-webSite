import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {AppDataState, DataStateEnum} from "../../state/member.state";
import {MemberModel} from "../../models/member.model";

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.css'
})
export class MemberListComponent implements OnInit{
  @Input() public membersInput$:Observable<AppDataState<MemberModel>> | null=null;
  public readonly DataStateEnum = DataStateEnum;

  ngOnInit(): void {
  }

}
