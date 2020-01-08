import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component'
import { AuthenticationServiceService } from './authentication-service.service';
import { AuthGuard } from './auth.guard';
// const routes: Routes =
// [{path:'',component:LoginComponent},
// {path:'login',component:LoginComponent},
// {path:'home',component:HomeComponent,canActivate:[AuthGuard]}];

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
