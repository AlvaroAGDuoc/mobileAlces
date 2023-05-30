import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { UsuarioLogin } from './interfaces/usuario';
import { ToastService } from '../services/toast.service';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from '../services/error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [AuthService],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    clave: ['', [Validators.required]],
  });

  loading: Boolean = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toast: ToastService,
    private router: Router,
    private errorService: ErrorService
  ) {}

  ngOnInit() {}

  login() {
    if (this.loginForm.invalid) {
      return this.loginForm.markAllAsTouched();
    }
    const usuario: UsuarioLogin = {
      email: this.loginForm.value['email'],
      clave: this.loginForm.value['clave'],
    };

    this.loading = true;
    this.authService.login(usuario).subscribe({
      next: (token: string) => {
        localStorage.setItem('token', token);
        this.toast.presentToast('Inicio de sesion exitoso', 'success');
        this.router.navigate(['/home']);
      },
      error: (e: HttpErrorResponse) => {
        this.errorService.msjError(e);
        this.loading = false;
      },
    });
  }
}
