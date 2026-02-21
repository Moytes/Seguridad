import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Button } from 'primeng/button';
import { InputText } from 'primeng/inputtext';
import { Password } from 'primeng/password';
import { Card } from 'primeng/card';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink, Button, InputText, Password, Card],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  nombre = signal('');
  email = signal('');
  password = signal('');
  confirmPassword = signal('');

  onRegister() {
    console.log('Register:', this.nombre(), this.email(), this.password());
  }
}
