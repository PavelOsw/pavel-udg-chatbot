import { Component } from '@angular/core';

// Datos de ejemplo
export interface Roles {
  id: number;
  name: string;
  description: string;
  status: boolean;
  created: string;
}

const ROLE_DATA: Roles[] = [
  {id: 1, name: 'Admin', description: 'admin', status: true, created: '12/10/2023'},
  {id: 2, name: 'Coord', description: 'coord', status: false, created: '12/10/2023'},
];

@Component({
  selector: 'app-role-page',
  templateUrl: './role-page.component.html',
  styles: [
  ]
})
export class RolePageComponent {
  displayedColumns: string[] = ['id', 'name', 'description', 'status', 'created'];
  dataSource = ROLE_DATA;
}
