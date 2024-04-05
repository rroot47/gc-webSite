import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ClientModel} from "../models/client.model";
import {API_BASE_URL} from "../constants/baseUrl.constant";
import {Observable} from "rxjs";
import {SigninModel} from "../models/signin.model";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }


  addClient(clientModel:ClientModel):Observable<ClientModel>{
    return this.http.post<ClientModel>(API_BASE_URL+"/client", clientModel);
  }

  signIn(email:string, password:string ):Observable<SigninModel>{
    let body = {email:email, password:password}
    return  this.http.post<SigninModel>(API_BASE_URL+"/signin", body);
  }
}
