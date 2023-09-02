import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import { CategoryService } from 'src/app/core/services/category.service';
import { Category } from 'src/app/models/category';
import { Observable } from 'rxjs';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

@Component({
  selector: 'app-tree-nav',
  templateUrl: './tree-nav.component.html',
  styleUrls: ['./tree-nav.component.scss'],
})
export class TreeNavComponent {
  categories: Category[] = [];
  categories$: Observable<Category[]>;
  /* Angular material tree nav */
  TREE_DATA: FoodNode[] = [];
  treeControl = new NestedTreeControl<FoodNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor(private categoryService: CategoryService) {
    this.categories$ = this.categoryService.categories$;
    this.suscripcion();
  }

  convertCategoryToFoodNode(category: Category): FoodNode {
    var foodNode: FoodNode = {
      name: category.category_name,
      children: category.poses.map((pose) => ({ name: pose.english_name })),
    };
    return foodNode;
  }

  suscripcion() {
    this.categories$.subscribe({
      next: (response) => {
        response.forEach((category) => {
          this.TREE_DATA.push(this.convertCategoryToFoodNode(category));
          this.categories.push(category);
        });
      },
      error: (error) => {
        console.log('treeNavError', error);
      },
      complete: () => {
        this.dataSource.data = this.TREE_DATA;
        console.log('completado, valor de TREE_DATA', this.TREE_DATA);
      },
    });
  }

  hasChild = (_: number, node: FoodNode) =>
    !!node.children && node.children.length > 0;

  categoryClicked(node: FoodNode) {
    console.log('node categoryClicked : ', node);
  }

  poseClicked(node: FoodNode) {
    console.log('node poseClicked : ', node);
  }
}
