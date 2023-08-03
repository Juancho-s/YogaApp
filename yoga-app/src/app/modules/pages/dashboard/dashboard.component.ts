import { Component, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/core/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  lista: Category[] = [];

  constructor(private catService: CategoryService, private breakpointObserver: BreakpointObserver, private route: Router) {}

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  ngOnInit(): void {
    this.catService.getAllCategories().subscribe({
      next:(response: Category[])=>{
        response.forEach((category: Category)=>{
          this.lista.push(category);
          console.info("Se incorporo la categoria: ", category.id);
        });
      },
      error:(error)=>{
        console.error("Algo ocurrio al llamar la categoria.");
      },
      complete:()=>{
        console.info("Se completo la lista de categorias.");
      }
    });
  }
}
