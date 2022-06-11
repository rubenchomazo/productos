import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Operating } from './operating.model';

@Injectable({ providedIn: 'root' })
export class OperatorService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  addValue(operating: Operating) {
    let url = 'http://localhost:8200/add-value';
    return this.http.post(url, operating, this.httpOptions);
  }

  operate(operating: Operating) {
    let url = 'http://localhost:8200/operator';
    return this.http.post(url, operating, this.httpOptions);
  }

  getAll() {
    let url = 'http://localhost:8200/get-values';
    return this.http.get(url);
  }

  cleanList() {
    let url = 'http://localhost:8200/clean-values';
    return this.http.get(url);
  }
}
