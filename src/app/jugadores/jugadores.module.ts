import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JugadoresPageRoutingModule } from './jugadores-routing.module';

import { JugadoresPage } from './jugadores.page';

import { FichaJugadorComponent } from './components/ficha-jugador/ficha-jugador.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JugadoresPageRoutingModule,
    SharedModule,
  ],
  declarations: [JugadoresPage, FichaJugadorComponent],
})
export class JugadoresPageModule {}
