import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlujosPageRoutingModule } from './flujos-routing.module';

import { FlujosPage } from './flujos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlujosPageRoutingModule
  ],
  declarations: [FlujosPage]
})
export class FlujosPageModule {}
