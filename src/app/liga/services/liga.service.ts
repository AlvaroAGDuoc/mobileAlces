import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Estadistica } from '../interfaces/estadisticas';

@Injectable({
  providedIn: 'root',
})
export class LigaService {
  private miUrlBase: string = environment.urlBase;

  constructor(private http: HttpClient) {}

  getEstadisticas(tipo: string): Observable<Estadistica> {
    return this.http.get<Estadistica>(`${this.miUrlBase}liga/${tipo}`);
  }
}
