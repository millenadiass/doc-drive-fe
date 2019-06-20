import { Component, OnInit } from '@angular/core';
import { LoginUserService } from './login-user.service';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  constructor(private LoginService: LoginUserService, private router: Router) { }

  emailField = new FormControl('', [Validators.required]);
  passwordField = new FormControl('', [Validators.required]);

  ngOnInit() {
  }

  public  login_click(){
    this.LoginService.Login(this.emailField.value, this.passwordField.value).then(result => {
      if (result) {
        this.router.navigate(['/home'])
      }
      else {
        alert('error');
      }
    })
  }
}
