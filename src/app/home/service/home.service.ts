import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from './login.model';

@Injectable({ providedIn: 'root' })
export class HomeService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  login(login: Login) {
    let url = environment.apiUrl + 'session/login';
    this.http.post(url, login, this.httpOptions).subscribe((data: any) => {
      console.log(data);
    });
  }
}
