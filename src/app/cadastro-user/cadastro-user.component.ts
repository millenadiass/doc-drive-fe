import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../cadastro/cadastro.service';
import { User } from '../model/user';

@Component({
  selector: 'app-cadastro-user',
  templateUrl: './cadastro-user.component.html',
  styleUrls: ['./cadastro-user.component.css']
})
export class CadastroUserComponent implements OnInit {

  constructor(private CadastroService:CadastroService) { }

  ngOnInit() {
  }

  public cadastrar_click()
  {
     let info = new User();
     info.DsMail = "milleenas.dias@gmail.com";
     info.DsPassword = "millenateste"; 
     info.DsUser = "Millena Dias da Silva";
 
    this.CadastroService.Cadastrar(info)
  }
 
}
