import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthenticationServiceService } from './authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
    constructor(private routes: Router,private https:AuthenticationServiceService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean{
       if(this.https.ifLogged()){
           
            return true;
        }else{
            this.routes.navigate(['login'])
        }
    }

      
}