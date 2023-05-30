import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-ligas',
  templateUrl: './ligas.component.html',
  styleUrls: ['./ligas.component.scss'],
  standalone: true,
  imports: [IonicModule, HttpClientModule],
})
export class LigasComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
