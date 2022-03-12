import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { time } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  rememberMe: boolean = false;
  ngOnInit(): void {
    this.rememberMe = false;
    this.AutoLogin();
  }
  emailControl = new FormControl('', [Validators.required,Validators.email]);
  passwordControl = new FormControl('', [Validators.required,Validators.minLength(8),]);
  showMessage = false;
  toggleShowMessage() {
  this.showMessage = !this.showMessage;
  }

  submit() {

    const passwordValue = this.passwordControl.value;
    console.log(this.emailControl, passwordValue)
    ;
    }
    AutoLogin(){
      const accessTokenObj = localStorage.getItem("token");
      // Retrieve rememberMe value from local storage
      const rememberMe = localStorage.getItem('rememberMe');
  console.log(accessTokenObj);
      if (accessTokenObj && rememberMe == 'yes') {
        this.router.navigate(['/home']);
      } else {
        console.log("You need to login")
      }
     }
}
/**https://stackoverflow.com/questions/60428490/how-to-trigger-person-click-remember-me-or-not */
