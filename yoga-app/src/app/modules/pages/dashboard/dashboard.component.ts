import { Component, OnInit, Output, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Category } from '../../../models/category';
import { CategoryService } from '../../../core/services/category.service';
import { Router } from '@angular/router';
import { PoseService } from '../../../core/services/pose.service';
import { Pose } from '../../../models/pose';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  lista: Category[] = [];
  listaPoses: Pose[] = [];
  poseClicked: Pose = {} as Pose;

  categoryClicked: Category = {} as Category;

  constructor(
    private catService: CategoryService,
    private breakpointObserver: BreakpointObserver,
    private route: Router,
    private poseService: PoseService
  ) {}

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  ngOnInit(): void {
    this.catService.getAllCategories().subscribe({
      next: (response: Category[]) => {
        response.forEach((category: Category) => {
          this.lista.push(category);
          //console.info('push category id : ', category.id);
        });
      },
      error: (error) => {
        console.error('Error detected to call categories.');
      },
      complete: () => {
        console.info('All categories listed.');
      },
    });
  }

  // getCategoryFromUserClickOnLista(categoryClicked: Category) {
  //   this.poseService.setCategoryNavbar(categoryClicked);
  // }

  sendPosesOnClick(clicked : Pose[]):void{
    console.log(clicked);
    this.listaPoses = clicked;
  }

  sendPoseOnClick(clicked : Pose):void{
    console.log(clicked);
    this.poseClicked = clicked;
  }
}
