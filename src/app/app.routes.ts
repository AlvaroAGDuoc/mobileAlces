import { Routes } from '@angular/router';
import { LoginPage } from './login/login.page';
import { HomePage } from './tabs/home/home.page';
import { LigasComponent } from './tabs/ligas/ligas.component';
import { JugadoresComponent } from './tabs/jugadores/jugadores.component';
import { EquipoComponent } from './tabs/equipo/equipo.component';
import { PerfilComponent } from './tabs/perfil/perfil.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./tabs/tabs.component').then((m) => m.TabsComponent),
    children: [
      { path: 'home', component: HomePage },
      { path: 'ligas', component: LigasComponent },
      { path: 'jugadores', component: JugadoresComponent },
      { path: 'equipo', component: EquipoComponent },
      { path: 'perfil', component: PerfilComponent },
    ],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then((m) => m.LoginPage),
  },
];
