import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  constructor(private http: HttpClient) { }

  public Login(DsEmail:string, DsSenha:string): Promise<boolean> {
    let Headers = new HttpHeaders({mail:DsEmail,password:DsSenha});
    return this.http.post(environment.url_api + "user/signin",null, {headers:Headers}).toPromise().then(data => {
      console.log("User Login: " + data);
      return true;
    }).catch(err => {
      console.log("Error occured.")
      return false;
    }
    );
  }
}
