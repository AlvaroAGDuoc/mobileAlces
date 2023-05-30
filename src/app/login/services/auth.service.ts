import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UsuarioLogin } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private miUrlBase: string = environment.urlBase;
  private miApiUrl: string;

  constructor(private http: HttpClient) {
    this.miApiUrl = 'api';
  }

  registro(usuario: any): Observable<void> {
    return this.http.post<void>(
      `${this.miUrlBase}${this.miApiUrl}/usuario/registro`,
      usuario
    );
  }

  login(usuario: UsuarioLogin): Observable<string> {
    return this.http.post<string>(
      `${this.miUrlBase}${this.miApiUrl}/login`,
      usuario
    );
  }
}
