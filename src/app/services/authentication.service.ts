import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { User } from '../models/user.model';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

export class LoginInfo {
  constructor(public username: string, email: string, public password:string) {}
}

@Injectable()
export class AuthenticationService {

  title = 'app works!';
  isUserLoggedIn:boolean = false;

  constructor(private _router: Router, private _http: Http) { }

  logout() {
    console.log("Enter: AuthenticationService:logout");

    localStorage.removeItem("user");
    this._router.navigate(['login']);
  }

  login(loginInfo: LoginInfo):Promise<User> {
    console.log("Enter: AuthenticationService:login");

    let data = JSON.stringify(loginInfo);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    let url = "http://localhost:8080/api/v1/authenticate";

    return this._http
            .post(url, data, options)
            .toPromise()
            .then(res => {
              console.log(res.json());
              return res.json();
            })
            .catch(this.handleError);
  }

  handleError(error: any) {
    console.log("Enter: AuthenticationService:handleError");
    return Promise.reject(error.message || error);
  }

  checkCredentials() {
    console.log("Enter: AuthenticationService:checkCredentials");
    if (localStorage.getItem("user") === null){
        this._router.navigate(['login']);
    } else {
      this._router.navigate(['app']);
    }
  }
}
