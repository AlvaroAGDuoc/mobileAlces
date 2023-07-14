import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  loading: boolean = true;
  usuario: any;
  constructor(private router:Router) {}

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

  desconectar(){
    localStorage.clear()
    this.router.navigate(['/login'])
  }
}