import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrl: './nav-admin.component.css'
})
export class NavAdminComponent implements OnInit{

  isAuth= localStorage.getItem("isAuth");

  constructor(private router:Router) {
  }
  ngOnInit(): void {
    if(this.isAuth==null){
      this.router.navigate(['/'])
    }
  }

  onSignOut() {
    localStorage.removeItem("isAuth")
    this.router.navigate(['/'])
  }
}
