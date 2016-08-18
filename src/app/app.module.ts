import { NgModule }       from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }       from './app.component';
import { routing,  appRoutingProviders } from './app.routing';
import { HomeModule }    from './home/home.module';
import { LoginComponent }  from './login/login.component';
import { MdCardModule } from '@angular2-material/card/card';
import { MdInputModule } from '@angular2-material/input/input';
import { MdButtonModule } from '@angular2-material/button/button';

import { AuthenticationService } from './services/authentication.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule,
    routing,
    HomeModule
  ],
  declarations: [
    AppComponent,
    LoginComponent
  ],
  providers: [
    appRoutingProviders,
    AuthenticationService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
