import { Component } from '@angular/core';
import { CadastroService } from './cadastro/cadastro.service';
import { User } from './model/user';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'doc-drive-fe';

 constructor(private CadastroService:CadastroService){

 }
 public teste_click()
 {
    let info = new User();
    info.DsMail = "milleena.dias@gmail.com";
    info.DsPassword = "millenateste"; 
    info.DsUser = "Millena Dias da Silva";

   this.CadastroService.Cadastrar(info)
 }
}

