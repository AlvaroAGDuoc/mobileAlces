import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import jwt_decode from 'jwt-decode';
import { LoginUsuario } from '../interfaces/loginUsuario';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ErrorService } from 'src/app/shared/services/error.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    clave: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private errorService: ErrorService
  ) {}

  ngOnInit() {}

  login() {
    const usuario: LoginUsuario = {
      email: this.formLogin.value['email'],
      clave: this.formLogin.value['clave'],
    };

    this.authService.login(usuario).subscribe({
      next: (data: any) => {
        localStorage.setItem('token', data.token);
        const usuarioString = JSON.stringify(data.usuario);
        localStorage.setItem('usuario', usuarioString);

        this.router.navigate(['/']);
      },
      error: (e: HttpErrorResponse) => {
        this.errorService.msjError(e);
        return;
      },
    });
  }
}
