import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, AppComponent],
})
export class HomePage {
  constructor() {}
}
