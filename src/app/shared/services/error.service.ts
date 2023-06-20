import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor() {}

  msjError(e: HttpErrorResponse) {
    if (e.error.msg) {
      // this.toastr.error(e.error.msg, 'Error');
      console.log(e.error.msg);
    } else {
      // this.toastr.error(
      //   'Ocurrio un error, comuniquese con el administrador',
      //   'Error'
      // );
      console.log('Error');
    }
  }
}
