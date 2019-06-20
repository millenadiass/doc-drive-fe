import { Component } from '@angular/core';
import { User } from './model/user';
import { CadastroUserService } from './cadastro-user/cadastro-user.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'doc-drive-fe';

 constructor(private CadastroService:CadastroUserService){

 }
 public teste_click()
 {
    let info = new User();
    info.Mail = "milleena.dias@gmail.com";
    info.Password = "millenateste"; 
    info.UserName = "Millena Dias da Silva";

   this.CadastroService.Cadastrar(info)
 }
}

