import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  catchError,
  retry,
  throwError,
} from 'rxjs';
import { Category } from 'src/app/models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = 'https://yoga-api-nzy4.onrender.com/v1/categories';
  categories$: Observable<Category[]>;
  categoriesAsArray: Category[] = [];

  private message: BehaviorSubject<string> = new BehaviorSubject<string>(
    'Probando el behavior'
  );

  constructor(private http: HttpClient) {
    this.categories$ = this.getAllCategories();
    this.categories$.subscribe({
      next: (response) => {
        response.map((category) => this.categoriesAsArray.push(category));
      },
    });
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

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl).pipe(
      retry(2), //numero de intento de peticiones, sino sale se envia el error
      catchError(this.handleError)
      // hay q agregar la posibilidad de recibir un error al suscribirse desde el componente q llame al servicio
    );
  }

  get messageSubject(): Observable<string> {
    return this.message.asObservable();
  }

  set editMessageSubject(newValue: string) {
    this.message.next(newValue);
  }
}
