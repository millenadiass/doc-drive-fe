import { Injectable } from '@angular/core';
import { LoggedUser } from '../model/logged-user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { 
  }

  public User:LoggedUser;


}

