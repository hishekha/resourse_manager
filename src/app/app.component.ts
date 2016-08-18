import { Component , OnInit} from '@angular/core';
//import { AuthenticationService } from './services/authentication.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  title: string = "Hello";

  //constructor(private _authService: AuthenticationService) {}

  ngOnInit() {

  }
}
