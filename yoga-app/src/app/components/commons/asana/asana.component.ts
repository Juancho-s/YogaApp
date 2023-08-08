import { Component, Input, OnInit } from '@angular/core';

import { PoseService } from '../../../core/services/pose.service';
import { Category } from '../../../models/category';
import { Pose } from '../../../models/pose';

@Component({
  selector: 'app-asana',
  templateUrl: './asana.component.html',
  styleUrls: ['./asana.component.scss'],
})
export class AsanaComponent implements OnInit {

  @Input() pose: Pose = {} as Pose;

  idPoseFromCategories: Number = 3;

  constructor(private poseService: PoseService) {}

  ngOnInit() {
  }

  // getPoseById(): void {
  //   this.poseService.getPoseByIdFromApi(this.idPoseFromCategories).subscribe({
  //     next: (response) => {
  //       this.pose = response;
  //       console.log('getting : ', response);
  //     },
  //     error: (error) => {
  //       console.error('Error fetching data:', error);
  //     },
  //   });
  // }
}
