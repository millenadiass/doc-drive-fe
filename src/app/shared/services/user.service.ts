import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, Subscriber } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { UserRegistration } from '../models/user.registration.interface';
import { ConfigService } from '../utils/config.service';
import { BaseService } from "./base.service";

@Injectable({
    providedIn: 'root'
})
export class UserService extends BaseService {

    baseUrl: string = '';
    private loggedIn = false;

    constructor(private http: HttpClient, private configService: ConfigService) {
        super();
        this.loggedIn = !!this.getAuthToken();
        this.baseUrl = configService.getApiURI();
    }

    isLoggedIn() {
        return this.loggedIn;
    }
    getAuthToken() {
        return localStorage.getItem('auth_token');
    }
    setAuthToken(token: string) {
        localStorage.setItem('auth_token', token);
    }
    removeAuthToken() {
        localStorage.removeItem('auth_token');
    }

    register(email: string, password: string, firstName: string, lastName: string): Observable<boolean> {
        let body = JSON.stringify({ email, password, firstName, lastName });
        return this.http.post(`${this.baseUrl}/accounts`, body)
            .pipe(
                map(res => true),
                catchError(this.handleError));
    }

    login(userName, password) {
        return this.http
            .post<any>(`${this.baseUrl}/auth/login`, JSON.stringify({ userName, password }))
            .pipe(
                map(res => {
                    this.setAuthToken(res.auth_token);
                    this.loggedIn = true;
                    return true;
                }),
                catchError(this.handleError))
    }

    logout() {
        this.removeAuthToken();
        this.loggedIn = false;
    }

    facebookLogin(accessToken: string) {
        let headers = new HttpHeaders();
        let body = JSON.stringify({ accessToken });
        return this.http
            .post<any>(`${this.baseUrl}/externalauth/facebook`, body, { headers })
            .pipe(
                map(res => {
                    this.setAuthToken(res.auth_token);
                    this.loggedIn = true;
                    return true;
                }),
                catchError(this.handleError));
    }
}