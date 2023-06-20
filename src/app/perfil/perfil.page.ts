import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  loading: boolean = true;
  usuario: any;
  constructor() {}

  ngOnInit() {
    this.getUsuario();
  }

  getUsuario() {
    this.loading = true;
    const storedDataString = localStorage.getItem('usuario');

    if (storedDataString) {
      this.usuario = JSON.parse(storedDataString);
      this.loading = false;
      console.log(this.usuario);
    }
  }
}
