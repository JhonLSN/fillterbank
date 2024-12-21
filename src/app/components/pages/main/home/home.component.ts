import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRocket, faMobileScreen, faHandshake, faBullseye, faMagnifyingGlassChart, faMedal, faRotate, faLightbulb, faChartSimple, faLeaf } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FontAwesomeModule, CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  faRocket = faRocket;
  faMobileScreen = faMobileScreen;
  faHandshake = faHandshake;
  faBullseye = faBullseye;
  faMagnifyingGlassChart = faMagnifyingGlassChart;
  faMedal = faMedal;
  faRotate = faRotate;
  faLightbulb = faLightbulb;
  faChartSimple = faChartSimple;
  faLeaf = faLeaf;

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      cpf: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
      password: ['', Validators.required],
    });
  }

  onSubmit():void {
    if (this.loginForm.valid) {
      const {cpf, password} = this.loginForm.value;
      const loginSuccess = this.authService.login(cpf, password);

      if(loginSuccess) {
        this.router.navigate(['user/profile']); // Usuário será redirecionado para essa página!
      } else {
        alert('CPF ou senha inválidos');
      }
    }
  }
}
