import { Component, signal } from '@angular/core';
import { Boton } from './boton/boton';

@Component({
  selector: 'app-root',
  imports: [Boton],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Seguridad');
}
