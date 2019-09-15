import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  faCloud = faCloud;
  emailField = new FormControl('', [Validators.required]);
  passwordField = new FormControl('', [Validators.required]);

  ngOnInit() {
  }

  public login_click() {
    this.userService.login(this.emailField.value, this.passwordField.value).toPromise().then(result => {
      if (result)
        this.router.navigate(['/home'])
    }).catch(error => alert(error));
  }
}
