import { Routes, RouterModule } from '@angular/router';
import { LoginComponent }  from './login/login.component';
import { HomeComponent }    from './home/home.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
];

export const appRoutingProviders: any[] = [
];

export const routing = RouterModule.forRoot(appRoutes);
