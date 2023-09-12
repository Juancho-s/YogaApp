import { Component } from '@angular/core';
import { CategoryService } from './core/services/category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'yoga-app';
  /* service inyeccion for get quickly api data */
  constructor(categoryService: CategoryService) {}
}
