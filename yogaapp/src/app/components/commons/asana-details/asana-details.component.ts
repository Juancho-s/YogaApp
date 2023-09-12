import { Component, Input } from '@angular/core';
import { Pose } from 'src/app/models/pose';

@Component({
  selector: 'app-asana-details',
  templateUrl: './asana-details.component.html',
  styleUrls: ['./asana-details.component.scss'],
})
export class AsanaDetailsComponent {
  @Input() poseDetails?: Pose;
}
