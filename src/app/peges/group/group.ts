import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Card } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputText } from 'primeng/inputtext';
import { Textarea } from 'primeng/textarea';
import { Tag } from 'primeng/tag';
import { Toolbar } from 'primeng/toolbar';
import { InputNumber } from 'primeng/inputnumber';
import { Select } from 'primeng/select';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { Tooltip } from 'primeng/tooltip';

export interface GroupItem {
  id: number;
  nivel: string;
  autoridad: string;
  nombre: string;
  integrantes: number;
  tickets: number;
  descripcion: string;
}

@Component({
  selector: 'app-group',
  imports: [
    CommonModule,
    FormsModule,
    Card,
    TableModule,
    Dialog,
    ButtonModule,
    InputText,
    Textarea,
    Tag,
    Toolbar,
    InputNumber,
    Select,
    ConfirmDialog,
    Tooltip,
  ],
  providers: [ConfirmationService],
  templateUrl: './group.html',
  styleUrl: './group.css',
})
export class Group {
  groups: GroupItem[] = [
    {
      id: 1,
      nivel: 'Alto',
      autoridad: 'Administrador General',
      nombre: 'Seguridad TI',
      integrantes: 8,
      tickets: 14,
      descripcion: 'Grupo encargado de la seguridad informática y auditorías.',
    },
    {
      id: 2,
      nivel: 'Medio',
      autoridad: 'Coordinador',
      nombre: 'Desarrollo Web',
      integrantes: 12,
      tickets: 27,
      descripcion: 'Equipo de desarrollo de aplicaciones web y APIs.',
    },
    {
      id: 3,
      nivel: 'Bajo',
      autoridad: 'Supervisor',
      nombre: 'Soporte Técnico',
      integrantes: 5,
      tickets: 42,
      descripcion: 'Atención y resolución de incidencias técnicas.',
    },
    {
      id: 4,
      nivel: 'Alto',
      autoridad: 'Director',
      nombre: 'Infraestructura',
      integrantes: 6,
      tickets: 9,
      descripcion: 'Gestión de servidores, redes y servicios cloud.',
    },
    {
      id: 5,
      nivel: 'Medio',
      autoridad: 'Líder de Proyecto',
      nombre: 'QA & Testing',
      integrantes: 4,
      tickets: 18,
      descripcion: 'Pruebas de calidad y aseguramiento de software.',
    },
  ];

  showDialog = false;
  editMode = false;
  selectedGroup: GroupItem = this.emptyGroup();

  nivelesOptions = [
    { label: 'Alto', value: 'Alto' },
    { label: 'Medio', value: 'Medio' },
    { label: 'Bajo', value: 'Bajo' },
  ];

  constructor(private confirmationService: ConfirmationService) { }

  emptyGroup(): GroupItem {
    return {
      id: 0,
      nivel: 'Medio',
      autoridad: '',
      nombre: '',
      integrantes: 0,
      tickets: 0,
      descripcion: '',
    };
  }

  openNew(): void {
    this.selectedGroup = this.emptyGroup();
    this.editMode = false;
    this.showDialog = true;
  }

  editGroup(group: GroupItem): void {
    this.selectedGroup = { ...group };
    this.editMode = true;
    this.showDialog = true;
  }

  saveGroup(): void {
    if (this.editMode) {
      const index = this.groups.findIndex((g) => g.id === this.selectedGroup.id);
      if (index !== -1) {
        this.groups[index] = { ...this.selectedGroup };
      }
    } else {
      const maxId = this.groups.reduce((max, g) => Math.max(max, g.id), 0);
      this.selectedGroup.id = maxId + 1;
      this.groups = [...this.groups, { ...this.selectedGroup }];
    }
    this.showDialog = false;
  }

  deleteGroup(group: GroupItem): void {
    this.confirmationService.confirm({
      message: `¿Estás seguro de eliminar el grupo "${group.nombre}"?`,
      header: 'Confirmar Eliminación',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sí, eliminar',
      rejectLabel: 'Cancelar',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => {
        this.groups = this.groups.filter((g) => g.id !== group.id);
      },
    });
  }

  getNivelSeverity(nivel: string): 'success' | 'warn' | 'danger' | 'info' {
    switch (nivel) {
      case 'Alto':
        return 'danger';
      case 'Medio':
        return 'warn';
      case 'Bajo':
        return 'success';
      default:
        return 'info';
    }
  }

  get totalIntegrantes(): number {
    return this.groups.reduce((sum, g) => sum + g.integrantes, 0);
  }

  get totalTickets(): number {
    return this.groups.reduce((sum, g) => sum + g.tickets, 0);
  }
}
