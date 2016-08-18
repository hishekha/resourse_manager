import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent }    from './users/users.component';
import { MachinesComponent }  from './machines/machines.component';

const homeRoutes: Routes = [
  { path: 'home',
    component: HomeComponent,
    children: [
      { path: '' , component: DashboardComponent },
      { path: 'users',  component: UsersComponent },
      { path: 'machines', component: MachinesComponent }
    ]
  }
];

export const homeRouting = RouterModule.forChild(homeRoutes);
