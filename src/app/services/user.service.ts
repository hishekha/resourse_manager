import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { Http, Response } from '@angular/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  constructor(private _http: Http) {}

  getUsers():Observable<User[]> {
    console.log("Enter: UserService:getUsers");
    let url ="http://localhost:8080/api/v1/users"
    return this._http.get(url)
               .map(this.extractData)
               .catch(this.handleError);
  }

  private extractData(response: Response) {
    console.log(response.json());
    return response.json();
  }

  private handleError(error: any) {
    console.log("Error :" + error);
    let errMsg = (error.message) ? error.message :
      (error.status ? `${error.status} - ${error.statusText}` : 'Server error');
    return Observable.throw(errMsg);
  }

}
