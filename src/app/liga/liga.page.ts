import { Component, OnInit } from '@angular/core';
import { LigaService } from './services/liga.service';
import { Estadistica } from './interfaces/estadisticas';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-liga',
  templateUrl: './liga.page.html',
  styleUrls: ['./liga.page.scss'],
})
export class LigaPage implements OnInit {
  loading: boolean = true;
  estadisticas!: Estadistica;

  liga: boolean = false;
  public ligaForm: FormGroup = this.fb.group({
    liga: '1',
  });
  constructor(private ligaService: LigaService, private fb: FormBuilder) {}

  ngOnInit() {
    this.getLiga('1');
  }

  getLiga(liga: string) {
    this.loading = true;

    if (liga === '1') {
      this.loading = true;
      this.ligaService.getEstadisticas('masculina').subscribe({
        next: (data: any) => {
          this.estadisticas = data;
          this.estadisticas.estadisticasLiga.sort(
            (a, b) => b.puntos - a.puntos
          );
          this.liga = true;
          this.loading = false;
        },
        error: (e: any) => {
          this.liga = false;
          this.loading = false;
        },
      });
    } else {
      this.loading = true;
      this.ligaService.getEstadisticas('femenina').subscribe({
        next: (data: any) => {
          this.estadisticas = data;
          this.estadisticas.estadisticasLiga.sort(
            (a, b) => b.puntos - a.puntos
          );
          this.liga = true;
          this.loading = false;
        },
        error: (e: any) => {
          this.liga = false;
          this.loading = false;
        },
      });
    }
  }
}
