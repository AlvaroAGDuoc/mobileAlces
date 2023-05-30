import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss'],
  standalone: true,
  imports: [IonicModule, HttpClientModule],
})
export class EquipoComponent implements OnInit {
  loading: boolean = true;

  constructor() {}
  ngOnInit() {}
}
