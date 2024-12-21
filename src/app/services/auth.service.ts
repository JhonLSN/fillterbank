import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private router : Router) {}

  login(cpf: string, password: string): boolean {

    if(cpf === '48076425883' && password === '104252') {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.router.navigate(['user/profile']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
