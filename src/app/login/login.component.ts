import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../authentication-service.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    
  
    constructor(private https:AuthenticationServiceService, private routes:Router, private fb:FormBuilder){}
    submitted=false;
  get f(){ return this.loginForm.controls}
  loginForm =this.fb.group({
      username:['',Validators.required],
      pwd:['',Validators.required]
  })
  login(){
    this.submitted=true;
    if(this.loginForm.invalid){
        return
    }else{
        if(this.loginForm.controls['username'].value=="prashanth" &&  this.loginForm.controls['pwd'].value=="prashanth"){
            this.https.sendToken(this.loginForm.value.username)
            this.routes.navigate(['home'])
        }else{
            alert( 'username and password incorrect')
            this.loginForm.reset();
            this.submitted=false
        }
    }
}
}
