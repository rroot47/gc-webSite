import {Component, Input} from '@angular/core';
import {MemberModel} from "../../models/member.model";

@Component({
  selector: 'app-member-item',
  templateUrl: './member-item.component.html',
  styleUrl: './member-item.component.css'
})
export class MemberItemComponent {

  @Input() members!:MemberModel;

  onViewMember(id:number) {

  }
}
