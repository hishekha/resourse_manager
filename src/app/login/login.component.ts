import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthenticationService, LoginInfo } from '../services/authentication.service';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {

  user: LoginInfo = new LoginInfo('', '', '');
  errors:string = '';

  constructor(private _router: Router, private _authService: AuthenticationService) { }

  ngOnInit() {
    localStorage.removeItem("user");
  }

  login(user) {
    this.user.username = user.username;
    this.user.password = user.password;

    this._authService.login(user)
      .then(user => {
        if( user !== undefined)
        {
          localStorage.setItem("user", JSON.stringify(user));
          this._router.navigate(['home']);
        }
        else
        {
          this.errors = "Failed to load data";
        }
      })
      .catch(error => this.errors = error);
  }

}
