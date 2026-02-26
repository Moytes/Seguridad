import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from 'primeng/card';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Card],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private authService: AuthService) { }

  get userName(): string {
    return this.authService.getUser()?.nombre ?? 'Usuario';
  }

  stats = [
    { label: 'Usuarios Activos', value: '1,248', icon: 'pi pi-users', color: '#6366f1' },
    { label: 'Sesiones Hoy', value: '364', icon: 'pi pi-sign-in', color: '#22c55e' },
    { label: 'Incidentes', value: '7', icon: 'pi pi-exclamation-triangle', color: '#f59e0b' },
    { label: 'Uptime', value: '99.9%', icon: 'pi pi-server', color: '#06b6d4' },
  ];

  recentActivity = [
    { user: 'Carlos López', action: 'Inicio de sesión', time: 'Hace 2 min', icon: 'pi pi-sign-in' },
    { user: 'María García', action: 'Cambio de contraseña', time: 'Hace 15 min', icon: 'pi pi-key' },
    { user: 'Juan Pérez', action: 'Nuevo registro', time: 'Hace 1 hora', icon: 'pi pi-user-plus' },
    { user: 'Ana Torres', action: 'Acceso denegado', time: 'Hace 2 horas', icon: 'pi pi-ban' },
  ];
}
