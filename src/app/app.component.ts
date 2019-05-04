import { Component } from '@angular/core';
import { CadastroService } from './cadastro/cadastro.service';
import { CadastroUser } from './model/cadastro-user';



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
    let info = new CadastroUser();
    info.dsMail = "milleena.dias@gmail.com";
    info.dsPassword = "millenateste"; 
    info.dsUser = "Millena Dias da Silva";

   this.CadastroService.Cadastrar(info)
 }
}

