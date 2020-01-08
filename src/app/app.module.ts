import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component'

import { AuthGuard } from './auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationServiceService } from './authentication-service.service';

const routes:Routes=[{path:'',component:LoginComponent},
{path:'login',component:LoginComponent},
{path:'home',component:HomeComponent,canActivate:[AuthGuard]}]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [AuthenticationServiceService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
