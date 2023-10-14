import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styles: [`
    .grid-container {
      margin: 20px;
    }

    .dashboard-card {
      position: absolute;
      top: 15px;
      left: 15px;
      right: 15px;
      bottom: 15px;
    }

    .more-button {
      position: absolute;
      top: 5px;
      right: 10px;
    }

    .dashboard-card-content {
      text-align: center;
    }

  `]
})
export class DashboardPageComponent {
  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Usuarios',          cols: 1, rows: 1 },
          { title: 'Publicaciones',     cols: 1, rows: 1 },
          { title: 'Roles',             cols: 1, rows: 1 },
          { title: 'Categorías',        cols: 1, rows: 1 },
        ];
      }

      return [
        { title: 'Usuarios',          cols: 1, rows: 1 },
        { title: 'Publicaciones',     cols: 1, rows: 1 },
        { title: 'Roles',             cols: 1, rows: 1 },
        { title: 'Categorías',        cols: 1, rows: 1 },
      ];
    })
  );
}
