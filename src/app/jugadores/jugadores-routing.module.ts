import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JugadoresPage } from './jugadores.page';
import { FichaJugadorComponent } from './components/ficha-jugador/ficha-jugador.component';

const routes: Routes = [
  {
    path: '',
    component: JugadoresPage,
  },
  {
    path: 'info/:id',
    component: FichaJugadorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JugadoresPageRoutingModule {}
