import { Component, Input, OnInit } from '@angular/core';

import { PoseService } from '../../../core/services/pose.service';
import { Category } from '../../../models/category';
import { Pose } from '../../../models/pose';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-asana',
  templateUrl: './asana.component.html',
  styleUrls: ['./asana.component.scss'],
})
export class AsanaComponent implements OnInit {
  @Input() pose!: Pose;

  constructor() {}

  ngOnInit() {}
}
