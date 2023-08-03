import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Category } from 'src/app/models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl ="https://yoga-api-nzy4.onrender.com/v1/categories";

  constructor(private http:HttpClient) { }

  handleError(error: HttpErrorResponse){
    if(error.status === 0){
      console.error(`Ha ocurrido un error: ${error.error}`);
    }else{
      console.error(`Error en el backend: ${error.status}. El error es: ${error.error}`);
    }
    return throwError(
      ()=> new Error('Error en la petición de contacto aleatorio')
    );
  }

  getAllCategories():Observable<Category[]>{
    
    return this.http.get<Category[]>(this.apiUrl).pipe(
      retry(2),  //numero de intento de peticiones, sino sale se envia el error
      catchError(this.handleError)
      // hay q agregar la posibilidad de recibir un error al suscribirse desde el componente q llame al servicio
    );
  }
}
