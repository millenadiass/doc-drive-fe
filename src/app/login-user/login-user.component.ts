import { Component, OnInit } from '@angular/core';
import { LoginUserService } from './login-user.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  constructor(private LoginService: LoginUserService) { }

  ngOnInit() {
  }

  public  login_click(){
    this.LoginService.Login('milleena.dias@gmail.com', 'millenateste');
  }
}
