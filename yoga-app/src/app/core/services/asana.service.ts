import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { ApiEndpoints } from 'src/app/models/apiEndPoints';
import { Pose } from 'src/app/models/pose';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiEndpoints: ApiEndpoints;

  constructor(private http: HttpClient) {
    this.apiEndpoints = new ApiEndpoints();
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error(`An error has ocurred : ${error.error}`);
    } else {
      console.error(
        `BackEnd error: ${error.status}. Error info: ${error.error}`
      );
    }
    return throwError(() => new Error('Error in the random Category petition'));
  }

  getData(): Observable<Pose> {
    return this.http
      .get<Pose>(this.apiEndpoints['pose-by-id'] + '1')
      .pipe(retry(2), catchError(this.handleError));
  }
}
