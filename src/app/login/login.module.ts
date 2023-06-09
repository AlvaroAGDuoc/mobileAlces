import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from './login/login.component';
import { LoginPageRoutingModule } from './login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
  ],
})
export class LoginModule {}
