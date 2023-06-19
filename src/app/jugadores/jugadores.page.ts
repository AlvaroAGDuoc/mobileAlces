import { Component, OnInit } from '@angular/core';
import { JugadoresService } from './services/jugadores.service';
import { Jugador } from './interfaces/jugador';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.page.html',
  styleUrls: ['./jugadores.page.scss'],
})
export class JugadoresPage implements OnInit {
  jugadores: Jugador[] = [];
  loading: boolean = true;

  constructor(private jugadorService: JugadoresService) {}

  ngOnInit() {
    this.getJugadores();
  }

  getJugadores() {
    this.loading = true;
    this.jugadorService.getJugadores().subscribe((data) => {
      this.jugadores = data;
      console.log(this.jugadores);
      this.loading = false;
    });
  }
}
