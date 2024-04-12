import { Injectable } from '@angular/core';
import Toastify from 'toastify-js';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

  show(message: string, options?: any): void {
    Toastify({
      text: message,
      ...options
    }).showToast();
  }
}
