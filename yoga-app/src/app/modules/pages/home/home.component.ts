import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/core/services/category.service';
import { PoseService } from 'src/app/core/services/pose.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  //DEBE LLEGAR UNA CATEGORIA PARA LISTAR TODAS LAS ASANAS QUE LE PERTENECEN

  @Input() categoryClicked: Category = {} as Category;

  constructor(private poseService: PoseService) {}

  ngOnInit() {
    this.subscribeNavbarClicker();
  }

  //categoria clickeada
  subscribeNavbarClicker(): void {
    this.poseService.getCategoryNavbar().subscribe({
      next: (response) => {
        this.categoryClicked = response;
        //console.log('getting in HomeComponent: ', this.categoryClicked);
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      },
    });
  }
}
