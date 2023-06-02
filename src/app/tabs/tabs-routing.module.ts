import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'inicio',
        loadChildren: () =>
          import('../tabs/inicio/inicio.module').then(
            (m) => m.InicioPageModule
          ),
      },
      {
        path: 'ligas',
        loadChildren: () =>
          import('../tabs/liga/liga.module').then((m) => m.LigaPageModule),
      },
      {
        path: 'jugadores',
        loadChildren: () =>
          import('../tabs/jugadores/jugadores.module').then(
            (m) => m.JugadoresPageModule
          ),
      },
      {
        path: 'flujos',
        loadChildren: () =>
          import('../tabs/flujos/flujos.module').then(
            (m) => m.FlujosPageModule
          ),
      },
      {
        path: 'perfil',
        loadChildren: () =>
          import('../tabs/perfil/perfil.module').then(
            (m) => m.PerfilPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/tabs/inicio',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
