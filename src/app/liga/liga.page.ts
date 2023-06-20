import { Component, OnInit } from '@angular/core';
import { LigaService } from './services/liga.service';
import { Estadistica } from './interfaces/estadisticas';

@Component({
  selector: 'app-liga',
  templateUrl: './liga.page.html',
  styleUrls: ['./liga.page.scss'],
})
export class LigaPage implements OnInit {
  loading: boolean = true;
  estadisticas!: Estadistica;
  constructor(private ligaService: LigaService) {}

  ngOnInit() {
    this.getLiga();
  }

  getLiga() {
    this.loading = true;
    this.ligaService.getEstadisticas('masculina').subscribe((data) => {
      this.estadisticas = data;

      this.estadisticas.estadisticasLiga.sort((a, b) => b.puntos - a.puntos);
      console.log(this.estadisticas);
      this.loading = false;
    });
  }
}
