import { Component } from '@angular/core';
import { ActionBarComponent } from '../action-bar/action-bar.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'cl-page-layout',
  standalone: true,
  imports: [ActionBarComponent, MatIconModule],
  templateUrl: './page-layout.component.html',
  styleUrl: './page-layout.component.scss'
})
export class PageLayoutComponent {

}
