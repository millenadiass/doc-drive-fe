import { Component, OnInit } from '@angular/core';

import { User } from '../model/user';
import { CadastroUserService } from './cadastro-user.service';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faCloud } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-cadastro-user',
  templateUrl: './cadastro-user.component.html',
  styleUrls: ['./cadastro-user.component.scss']
})
export class CadastroUserComponent implements OnInit {
  faCloud = faCloud;
  constructor(private CadastroService: CadastroUserService, private router: Router) {
  }

  ngOnInit() {
  }

  nomeField = new FormControl('', [Validators.required]);
  emailField = new FormControl('', [Validators.required]);
  passwordField = new FormControl('', [Validators.required]);

  public cadastrar_click() {

    let info = new User();

    info.UserName = this.nomeField.value;
    info.Mail = this.emailField.value;
    info.Password = this.passwordField.value;

    this.CadastroService.Cadastrar(info).then(result => {
      if (result) {
        this.router.navigate(['/login'])
      }
      else {
        alert('error');
      }
    })

  }

}
