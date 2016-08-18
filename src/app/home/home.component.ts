import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  user: User =  new User(-1, '', '');

  constructor(private _router:Router,  private _authService: AuthenticationService) { }

  ngOnInit() {
    //console.log("Entry: HomeComponent:ngOnInit()")
    this.checkIfSessionExist();
    this.user =  <User>JSON.parse(localStorage.getItem("user"));
    //console.log(this.user);
  }

  logout() {
    this._authService.logout();
  }

  private checkIfSessionExist() {
    if(localStorage.getItem("user") !== null && localStorage.getItem("user") !== undefined) {
      //console.log(localStorage.getItem("user"));
      return true;
    } else {
      //console.log("redirecting to login");
      this._router.navigate(['login']);
    }
  }

}
