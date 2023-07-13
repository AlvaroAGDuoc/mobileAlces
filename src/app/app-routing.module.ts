import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio', // Establece el nombre de la ruta de la página que deseas como página raíz
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'inicio',
    loadChildren: () =>
      import('./inicio/inicio.module').then((m) => m.InicioPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'flujos',
    loadChildren: () =>
      import('./flujos/flujos.module').then((m) => m.FlujosPageModule),
  },
  {
    path: 'jugadores',
    loadChildren: () =>
      import('./jugadores/jugadores.module').then((m) => m.JugadoresPageModule),
  },
  {
    path: 'liga',
    loadChildren: () =>
      import('./liga/liga.module').then((m) => m.LigaPageModule),
  },
  {
    path: 'perfil',
    loadChildren: () =>
      import('./perfil/perfil.module').then((m) => m.PerfilPageModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
