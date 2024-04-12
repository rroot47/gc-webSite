import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MemberModel} from "../models/member.model";
import {API_BASE_URL} from "../constants/baseUrl.constant";
import {AherantModel} from "../models/aherant.model";

@Injectable({providedIn: 'root'})
export class MemberService {

  constructor(private http:HttpClient) { }

  getAllMembers(page:number, size:number):Observable<MemberModel> {
    return this.http.get<MemberModel>(API_BASE_URL + "/paging?page="+page+"&size="+size);
  }

  getAllMembersDebts(year:string, page:number, size:number):Observable<MemberModel> {
    return this.http.get<MemberModel>(API_BASE_URL+"/paging/"+year+"?page="+page+"&size="+size)
  }

  saveMember(memberModel:AherantModel):Observable<AherantModel>{
    return this.http.post<AherantModel>(API_BASE_URL + "/member", memberModel)
  }
}
