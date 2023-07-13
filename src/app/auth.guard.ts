import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const AuthGuard = () => {
  const router = inject(Router);

  const token = localStorage.getItem('token');

  if (token === null) {
    localStorage.removeItem('token');

    localStorage.removeItem('usuario');

    router.navigate(['/login']);
  }

  return true;
};
