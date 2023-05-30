import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Estadistica } from '../interface/liga';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LigaService {
  private miUrlBase: string = environment.urlBase;
  private miApiUrl: string;

  constructor(private http: HttpClient) {
    this.miApiUrl = 'api';
  }

  getLiga(): Observable<Estadistica> {
    return this.http.get<Estadistica>(`${this.miUrlBase}${this.miApiUrl}/liga`);
  }
}
