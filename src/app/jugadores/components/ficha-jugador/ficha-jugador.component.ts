import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { JugadoresService } from '../../services/jugadores.service';
import { ActivatedRoute } from '@angular/router';

import { Lesion } from '../../interfaces/lesion';
import { CommonModule } from '@angular/common';
import { JugadorInfo } from '../../interfaces/jugadorInfo';

@Component({
  selector: 'app-ficha-jugador',
  templateUrl: './ficha-jugador.component.html',
  styleUrls: ['./ficha-jugador.component.scss'],
})
export class FichaJugadorComponent implements OnInit {
  id: number;

  loading: boolean = true;

  info!: JugadorInfo;
  historialLesiones: Lesion[] = [];
  public lesionActual!: Lesion;

  fechaHoy = new Date();
  lesionVigente = false;

  constructor(
    private aRouter: ActivatedRoute,
    private jugadorService: JugadoresService
  ) {
    this.id = Number(this.aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.getJugador(this.id);
    this.getHistorialLesion(this.id);
  }

  getJugador(id: number) {
    this.loading = true;
    this.jugadorService.getJugador(id).subscribe((data) => {
      this.info = data;
      console.log(this.info);
      this.loading = false;
    });
  }

  getHistorialLesion(id: number) {
    this.loading = true;
    this.jugadorService.getHistorialLesion(id).subscribe((data) => {
      //console.log(data);
      this.historialLesiones = data[0].lesionJugadors;
      //console.log(this.historialLesiones);

      // aqui se obtiene la ultima lesion registrada
      for (let le of this.historialLesiones) {
        this.lesionActual = le;
      }
      console.log(this.lesionActual);

      let fecha_inicio = new Date(this.lesionActual.fecha_inicio);
      let fecha_termino = new Date(this.lesionActual.fecha_termino);

      if (fecha_inicio <= this.fechaHoy && this.fechaHoy <= fecha_termino) {
        console.log('SI');
        this.lesionVigente = true;
      }

      this.loading = false;
    });
  }
}
