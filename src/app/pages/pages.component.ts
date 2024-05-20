import { Component } from '@angular/core';
import { LayoutComponent } from '../shared/components/layout/layout.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'cl-pages',
  standalone: true,
  imports: [LayoutComponent, RouterOutlet],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
export class PagesComponent {

}
