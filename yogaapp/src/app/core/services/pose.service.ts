import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { ApiEndpoints } from 'src/app/models/apiEndPoints';
import { Pose } from 'src/app/models/pose';
import { Subject } from 'rxjs';
import { Category } from 'src/app/models/category';

@Injectable({
  providedIn: 'root',
})
export class PoseService {
  apiEndpoints: ApiEndpoints;
  //subjet for obtain categories when user click.
  private navCategory$: Subject<Category> = new Subject<Category>();

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
    return throwError(() => new Error('Error in the random Pose petition'));
  }

  getPoseByIdFromApi(idPose: Number): Observable<Pose> {
    return this.http
      .get<Pose>(this.apiEndpoints['pose-by-id'] + idPose)
      .pipe(retry(2), catchError(this.handleError));
  }

  setCategoryNavbar(category: Category) {
    this.navCategory$.next(category);
  }
  getCategoryNavbar() {
    return this.navCategory$.asObservable();
  }
}
