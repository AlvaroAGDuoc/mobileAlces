import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginUsuario } from '../interfaces/loginUsuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private miUrlBase: string = environment.urlBase;

  constructor(private http: HttpClient) {}

  login(usuario: LoginUsuario): Observable<string> {
    return this.http.post<string>(`${this.miUrlBase}login`, usuario);
  }
}
