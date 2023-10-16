import { Component } from '@angular/core';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styles: [`
    .form-container mat-form-field + mat-form-field {
      margin-left: 10px;
    }
  `]
})
export class PostPageComponent {

}
