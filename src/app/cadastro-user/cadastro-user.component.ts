import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faCloud } from '@fortawesome/free-solid-svg-icons';

import { UserService } from '../shared/services/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-user',
  templateUrl: './cadastro-user.component.html',
  styleUrls: ['./cadastro-user.component.scss']
})
export class CadastroUserComponent {
  faCloud = faCloud;
  constructor(private userService: UserService, private router: Router) {
  }

  nomeField = new FormControl('', [Validators.required]);
  sobrenomeField = new FormControl('', [Validators.required]);
  emailField = new FormControl('', [Validators.required]);
  passwordField = new FormControl('', [Validators.required]);

  public cadastrar_click() {
    this.userService.register(this.emailField.value, this.passwordField.value, this.nomeField.value, this.sobrenomeField.value)
      .toPromise().then(result => {
        if (result)
          this.router.navigate(["/login"]);
      }).catch(error => {
        console.log(error)
        if (error instanceof HttpErrorResponse) {
          if (error.status >= 400 && error.status < 500) {
            if (error.error)
              if (error.error.DuplicateUserName)
                alert("E-mail já cadastrado.")
              else
                alert(error.message);
          }
          else
            alert(error.message);
        }
      });

  }

}
