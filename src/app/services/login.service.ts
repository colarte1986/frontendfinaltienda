import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://localhost:4000/api/login/';
  constructor(private http: HttpClient) { }

  obtenerUsuario(name : string): Observable<any>{
    return this.http.get(this.url + name);
  }
}
