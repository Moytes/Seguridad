import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Button } from 'primeng/button';
import { InputText } from 'primeng/inputtext';
import { Password } from 'primeng/password';
import { Card } from 'primeng/card';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink, Button, InputText, Password, Card],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = signal('');
  password = signal('');

  onLogin() {
    console.log('Login:', this.email(), this.password());
  }
}
