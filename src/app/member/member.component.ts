import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {EventDrivenService} from "../services/event-driven.service";
import {MemberService} from "../services/member.service";
import {ActionEvent, AppDataState, DataStateEnum, MemberActionsTypes} from "../state/member.state";
import {catchError, map, Observable, of, startWith} from "rxjs";
import {MemberModel} from "../models/member.model";

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrl: './member.component.css'
})
export class MemberComponent implements OnInit{


  public members$:Observable<AppDataState<MemberModel>> | null=null;
  public readonly DataStateEnum = DataStateEnum;
  page:number=0;
  size:number=10;

  constructor(private router:Router,
              private memberService:MemberService,
              private  eventDrivenService:EventDrivenService) {
  }
  isAuth:any =  localStorage.getItem("isAuth");
  ngOnInit(): void {
    if(this.isAuth==null){
      this.router.navigate(['/'])
    }
    this.eventDrivenService.sourceEventSubjectObservable.subscribe((actionEvent:ActionEvent)=>{
      this.onActionEvent(actionEvent);
    })
  }

  onGetAllMembers() {
    this.members$=this.memberService.getAllMember(this.page, this.size).pipe(
      map(data=>({dataState:DataStateEnum.LOADED, data:data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err =>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
    );
  }

  onActionEvent($event: ActionEvent) {
    switch ($event.type) {
      case MemberActionsTypes.GET_ALL_MEMBERS:this.onGetAllMembers();
        break;
      /*  case ProductActionsTypes.GET_SELECTED_PRODUCTS:this.onGetSelectedProducts();break;
        case ProductActionsTypes.GET_AVAILABLE_PRODUCTS:this.onGetAvailableProducts();break;
        case ProductActionsTypes.SEARCH_PRODUCTS:this.OnSearch($event.payload); break;
        case ProductActionsTypes.POST_NEW_PRODUCTS:this.onNewProducts();break;
        case ProductActionsTypes.SELECT_PRODUCTS:this.onSelect($event.payload); break;
        case ProductActionsTypes.DELETE_PRODUCTS:this.onDelete($event.payload);break;
        case ProductActionsTypes.EDIT_PRODUCTS:this.onEdit($event.payload); break;*/
    }
  }
    onSignOut(){
    localStorage.removeItem("isAuth")
    this.router.navigate(['/'])
  }

}
