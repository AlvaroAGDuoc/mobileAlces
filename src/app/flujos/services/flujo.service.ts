import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Flujo } from '../interfaces/flujo';
@Injectable({
  providedIn: 'root',
})
export class FlujoService {
  private miUrlBase: string = environment.urlBase;

  constructor(private http: HttpClient) {}

  getIngresosEgresos(): Observable<Flujo> {
    return this.http.get<Flujo>(`${this.miUrlBase}ingresos-egresos`);
  }
}
