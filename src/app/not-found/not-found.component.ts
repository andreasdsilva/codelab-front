import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

const components = [
  MatButtonModule,
];

@Component({
  selector: 'cl-not-found',
  standalone: true,
  imports: [...components],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

}
