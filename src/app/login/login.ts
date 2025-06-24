import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    RouterOutlet, 
    MatToolbarModule, 
    MatIconModule, 
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  email = '';
  senha = '';
  erro = '';

  constructor(private router: Router) {}

  entrar() {
    if (this.email === 'admin@teste.com' && this.senha === '123456') {
      this.erro = '';
      this.router.navigate(['/listaDeCompras']);
    } else {
      this.erro = 'Email ou senha incorretos.';
    }
  }
}
