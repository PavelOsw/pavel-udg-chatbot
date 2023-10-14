import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-message-page',
  templateUrl: './message-page.component.html',
  styles: [`
    .container {
      margin: 20px;
    }
  `]
})
export class MessagePageComponent {

}
