import { Component } from '@angular/core';

// Datos de ejemplo
export interface Catergories {
  id: number;
  name: string;
  description: string;
  status: boolean;
  created: string;
}

const CATEGORIES_DATA: Catergories[] = [
  {id: 1, name: 'Anuncio', description: 'anuncios', status: true, created: '12/10/2023'},
  {id: 2, name: 'Info', description: 'información', status: true, created: '12/10/2023'},
];

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styles: [
  ]
})
export class CategoryPageComponent {
  displayedColumns: string[] = ['id', 'name', 'description', 'status', 'created'];
  dataSource = CATEGORIES_DATA;
}
