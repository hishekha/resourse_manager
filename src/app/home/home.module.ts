import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { MdButtonModule } from '@angular2-material/button/button';
import { MdSidenavModule } from '@angular2-material/sidenav/sidenav';
import { MdCardModule } from '@angular2-material/card/card';
import { MdIconModule } from '@angular2-material/icon/icon';
import { MdInputModule } from '@angular2-material/input/input';
import { MdCheckboxModule } from '@angular2-material/checkbox/checkbox';
import { MdToolbarModule } from '@angular2-material/toolbar/toolbar';
import { MdListModule } from '@angular2-material/list/list';

import { HomeComponent } from './home.component';
import { UsersComponent } from './users/users.component';
import { MachinesComponent } from './machines/machines.component';

import { UserService } from '../services/user.service';
import { MachineService } from '../services/machine.service';

import { homeRouting } from './home.routing';

@NgModule({
  imports:[
    FormsModule,
    MdButtonModule,
    MdSidenavModule,
    MdCardModule,
    MdIconModule,
    MdInputModule,
    MdCheckboxModule,
    MdToolbarModule,
    CommonModule,
    MdListModule,
    homeRouting
  ],
  declarations:[
    HomeComponent,
    UsersComponent,
    MachinesComponent
  ],
  providers:[
    UserService,
    MachineService
  ]
})
export class HomeModule {

}
