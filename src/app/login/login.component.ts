import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, Validators } from '@angular/forms';

import { ActivatedRoute, Router }       from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rememberMe:boolean= true ;



  constructor(private router: Router) {
    this.rememberMe= false;
this.AutoLogin();
   }

  ngOnInit(): void {
  }
  emailControl = new FormControl('', [Validators.required,Validators.email]);
  passwordControl = new FormControl('', [Validators.required,Validators.minLength(8),]);
  showMessage = false;
  toggleShowMessage() {
  this.showMessage = !this.showMessage;
  }
  submit() {
    const passwordValue = this.passwordControl.value;
    console.log(this.emailControl, passwordValue);


          localStorage.setItem("Email", String(this.emailControl));
          localStorage.setItem("password", String(this.passwordControl));
console.log(this.rememberMe.valueOf());
if(this.rememberMe){
  localStorage.setItem("rememberMe", 'yes');
}
this.router.navigate(['/aboutus']);

    }

 AutoLogin(){
        const accessTokenObj = localStorage.getItem("Email");
        // Retrieve rememberMe value from local storage
        const rememberMe = localStorage.getItem('rememberMe');
    console.log(accessTokenObj);
    console.log(rememberMe);
console.log( rememberMe )
        if (rememberMe == 'yes') {
         this.router.navigate(['/home']);
        } else {
          console.log("You need to login");
          console.log(accessTokenObj);
        }
       }
}
