import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/asana.service';
import { Pose } from 'src/app/models/pose';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-asana',
  templateUrl: './asana.component.html',
  styleUrls: ['./asana.component.scss'],
})
export class AsanaComponent implements OnInit {
  //with "Partial fix error"
  pose: Partial<Pose> = {};
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getDataFromApi();
  }

  getDataFromApi(): void {
    this.apiService.getData().subscribe({
      next: (response) => {
        this.pose = response;
        console.log('getting : ', response);
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      },
    });
  }
}
