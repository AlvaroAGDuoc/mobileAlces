import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JugadoresPageRoutingModule } from './jugadores-routing.module';

import { JugadoresPage } from './jugadores.page';
import { LoadingComponent } from 'src/app/shared/components/loading/loading.component';
import { FichaJugadorComponent } from './components/ficha-jugador/ficha-jugador.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JugadoresPageRoutingModule,
    LoadingComponent,
  ],
  declarations: [JugadoresPage, FichaJugadorComponent],
})
export class JugadoresPageModule {}
