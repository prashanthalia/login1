import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

     constructor(private routes:Router ) { }
    sendToken(token){
        localStorage.setItem("user",token);

    }
    ifLogged(){
        return localStorage.getItem("user") !==null;
    }
    logout(){
        localStorage.removeItem("user");
        this.routes.navigate(['login']);
    }
   
}