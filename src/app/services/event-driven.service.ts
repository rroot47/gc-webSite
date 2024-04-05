import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {ActionEvent} from "../state/member.state";

@Injectable({
  providedIn: 'root'
})
export class EventDrivenService {

  sourceEventSubject:Subject<ActionEvent> = new Subject<ActionEvent>();
  sourceEventSubjectObservable=this.sourceEventSubject.asObservable();

  public  publishEvent(event:ActionEvent){
    this.sourceEventSubject.next(event);
  }
}
