import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subject,
  catchError,
  retry,
  throwError,
} from 'rxjs';
import { Category } from 'src/app/models/category';
import { Pose } from 'src/app/models/pose';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = 'https://yoga-api-nzy4.onrender.com/v1/categories';
  categories$: Observable<Category[]>;
  categoriesAsArray: Category[] = [];
  categorySelected: any;

  private message: BehaviorSubject<string> = new BehaviorSubject<string>(
    'Probando el behavior'
  );

  private categorySelectedInNav = new Subject<Category>();
  private poseSelectedInNav = new Subject<string>();

  instancia: any = 0;

  constructor(private http: HttpClient) {
    this.categories$ = this.getAllCategories();
    this.categories$.subscribe({
      next: (response) => {
        response.map((category) => this.categoriesAsArray.push(category));
        this.setCategorySelectedInNav(this.categoriesAsArray[0]);
      },
    });
    /* this service is a Singleton */
    this.instancia++;
    console.log('instance of category service : ', this.instancia);
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

  getCategorySelectedInNav(): Observable<Category> {
    return this.categorySelectedInNav.asObservable();
  }

  setCategorySelectedInNav(categoryClicked: Category) {
    this.categorySelectedInNav.next(categoryClicked);
    console.log('setCategory', categoryClicked.category_name);
  }

  getPoseSelectedInNavSubject(): Observable<string> {
    return this.poseSelectedInNav.asObservable();
  }

  setPoseSelectedInNavSubject(poseClickedName: string) {
    this.poseSelectedInNav.next(poseClickedName);
    console.log('setposeSelectedInNav', poseClickedName);
  }
}
