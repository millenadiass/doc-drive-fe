import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from '../model/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadastroUserService {

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
