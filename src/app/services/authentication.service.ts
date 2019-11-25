import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/operators/map';


@Injectable()
export class AuthenticationService {

  constructor(private httpClient: HttpClient) {

  }

  authenticateUser(data) {
    return this.httpClient.post(`http://loaclhost:3000/auth/v1/`, data);
  }

  setBearerToken(token:string) {
    localStorage.setItem('authToken', token);
  }

  getBearerToken() : string{
    return localStorage.getItem('authToken');
  }

  isUserAuthenticated(token:string) {
    return this.httpClient.post(`http://localhost:3000/auth/v1/isAuthenticated`, {}, {
    headers: new HttpHeaders().set(`Authorization`, `Bearer ${token}`)
    }).map(response => response['isAuthenticated']).toPromise();
  }
}
