import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlujosPage } from './flujos.page';

const routes: Routes = [
  {
    path: '',
    component: FlujosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlujosPageRoutingModule {}
