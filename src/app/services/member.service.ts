import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MemberModel} from "../models/member.model";
import {API_BASE_URL} from "../constants/baseUrl.constant";

@Injectable({providedIn: 'root'})
export class MemberService {

  constructor(private http:HttpClient) { }

  getAllMember(page:number, size:number):Observable<MemberModel> {
    const data=  this.http.get<MemberModel>(API_BASE_URL + "/paging?page="+page+"&size="+size);
    console.log(data)
    return data;
  }
}
