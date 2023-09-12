import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { Category } from 'src/app/models/category';
import { CategoryService } from '../../../core/services/category.service';
import { compileNgModule } from '@angular/compiler';
import { Pose } from 'src/app/models/pose';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  //DEBE LLEGAR UNA CATEGORIA PARA LISTAR TODAS LAS ASANAS QUE LE PERTENECEN
  category?: Category;
  pose!: Pose;
  poseDetails!: Pose;
  x: boolean = true;

  constructor(private categoryService: CategoryService) {
    this.categoryService.getCategorySelectedInNav().subscribe((response) => {
      this.category = response;
      this.x = true;
    });

    this.categoryService.getPoseSelectedInNavSubject().subscribe({
      next: (response) => {
        console.log('category', this.category?.category_name);
        this.category?.poses.forEach((pose: Pose) => {
          if (pose.english_name === response) {
            this.poseDetails = pose;
          }
        });
        this.x = false;
      },
    });
  }

  ngOnInit() {}
}
