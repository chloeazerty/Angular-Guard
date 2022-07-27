import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private roleAnonymus = false;
  private roleUser = false;
  private roleAdmin = false;

  constructor(private ROUTER: Router) { }

  showRole(role: string): void {
    if (role === 'anonymus') {
      this.roleAnonymus = true;
    } else if (role === 'user') {
      this.roleUser = true;
    } else if (role === 'admin') {
      this.roleAdmin = true;
    }
  }

}



