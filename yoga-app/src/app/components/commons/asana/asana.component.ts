import { Component } from '@angular/core';
import { ApiService } from 'src/app/core/http/api.service';

@Component({
  selector: 'app-asana',
  templateUrl: './asana.component.html',
  styleUrls: ['./asana.component.scss'],
})
export class AsanaComponent {
  data: any = 0;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getDataFromApi();
  }

  getDataFromApi(): void {
    this.apiService.getData().subscribe({
      next: (response) => {
        this.data = response;
        console.log('trayendo : ', response);
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      },
    });
  }
}
