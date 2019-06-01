import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }

  public Cadastrar(cadastroUser: User): Promise<boolean> {
    return this.http.post(environment.url_api + "user/signup", cadastroUser).toPromise().then(data => {
      console.log("User Login: " + data);
      return true;
    }).catch(err => {
      console.log("Error occured.")
      return false;
    }
    );
  }
}
