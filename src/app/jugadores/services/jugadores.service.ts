import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Jugador } from '../interfaces/jugador';
import { JugadorInfo } from '../interfaces/jugadorInfo';
import { Observable } from 'rxjs';
import { LesionJugador } from '../interfaces/lesion';

@Injectable({
  providedIn: 'root',
})
export class JugadoresService {
  private miUrlBase: string = environment.urlBase;

  constructor(private http: HttpClient) {}

  getJugadores(): Observable<Jugador[]> {
    return this.http.get<Jugador[]>(`${this.miUrlBase}jugadores`);
  }

  getJugador(id: number): Observable<JugadorInfo> {
    return this.http.get<JugadorInfo>(`${this.miUrlBase}jugador/${id}`);
  }

  getHistorialLesion(id: number): Observable<LesionJugador[]> {
    return this.http.get<LesionJugador[]>(
      `${this.miUrlBase}historial-lesion/${id}`
    );
  }
}
