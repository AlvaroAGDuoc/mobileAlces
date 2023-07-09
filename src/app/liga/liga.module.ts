import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LigaPageRoutingModule } from './liga-routing.module';

import { LigaPage } from './liga.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LigaPageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [LigaPage],
})
export class LigaPageModule {}
