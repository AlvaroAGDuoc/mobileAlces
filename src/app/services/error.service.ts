import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(private toast: ToastService) {}

  msjError(e: HttpErrorResponse) {
    if (e.error.msg) {
      this.toast.presentToast(e.error.msg, 'danger');
    } else {
      this.toast.presentToast(
        'Ocurrio un error, comuniquese con el administrador',
        'danger'
      );
    }
  }
}
