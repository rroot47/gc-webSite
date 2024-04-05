import { Component } from '@angular/core';
import {Subscription} from "rxjs";
import {NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isAuth : boolean | any;
  subscription: Subscription | any;

  constructor(private router:Router) {
    this.subscription = router.events.subscribe((event) =>{
      if(localStorage.getItem("isAuth")!=null){
        if(event instanceof NavigationStart)
          this.isAuth = true
      }else{
        this.isAuth = false;
      }

    })
  }
}
