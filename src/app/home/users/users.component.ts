import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  moduleId: module.id,
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.css']
})
export class UsersComponent implements OnInit {
  isAddUserFormOpen: boolean = false;
  errors: string;

  users:any = [
    {"id": 1, "username": "ironman", "email" : "tony.stark@marvel.com"},
    {"id": 2, "username": "batman", "email" : "bruce.wyane@marvel.com"},
    {"id": 3, "username": "spiderman", "email" : "peter.parker@marvel.com"},
  ];

  constructor(private _userService: UserService) {
    /*
    this._userService.getUsers()
        .subscribe(
          users => {
            console.log(users);
            this.users = users;
          },
          error => this.errors = error
        );
      */
  }

  ngOnInit() {

  }

}
