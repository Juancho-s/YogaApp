import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { PoseService } from '../../../core/services/pose.service';
import { Category } from '../../../models/category';
import { Pose } from '../../../models/pose';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  //DEBE LLEGAR UNA CATEGORIA PARA LISTAR TODAS LAS ASANAS QUE LE PERTENECEN

  @Input() categoryClicked: Category = {} as Category;

  @Input() posesClicked: Pose[] = [];

  pose!: Pose;

  constructor(
    private poseService: PoseService,
     private breakpointObserver: BreakpointObserver,
    ) {}

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  ngOnInit() {
    // this.subscribeNavbarClicker();
  }

  //categoria clickeada
  // subscribeNavbarClicker(): void {
  //   this.poseService.getCategoryNavbar().subscribe({
  //     next: (response) => {
  //       this.categoryClicked = response;
  //       //console.log('getting in HomeComponent: ', this.categoryClicked);
  //     },
  //     error: (error) => {
  //       console.error('Error fetching data:', error);
  //     },
  //   });
  // }

  sendPoseOnClick(clicked : Pose):void{
    this.pose = clicked;
  }
}
