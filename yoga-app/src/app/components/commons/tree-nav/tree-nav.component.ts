import { Component, EventEmitter, Output } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import { CategoryService } from 'src/app/core/services/category.service';
import { Category } from 'src/app/models/category';
import { Observable } from 'rxjs';

interface CategoryNode {
  name: string;
  children?: CategoryNode[];
  categoryNode?: Category;
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
  TREE_DATA: CategoryNode[] = [];
  treeControl = new NestedTreeControl<CategoryNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<CategoryNode>();
  /*  */
  @Output() categoryClick = new EventEmitter<any>();

  constructor(private categoryService: CategoryService) {
    this.categories$ = this.categoryService.categories$;
    this.categories$Suscripcion();
  }

  convertCategoryToCategoryNode(category: Category): CategoryNode {
    var CategoryNode: CategoryNode = {
      name: category.category_name,
      children: category.poses.map((pose) => ({
        name: pose.english_name,
      })),
      categoryNode: category,
    };
    return CategoryNode;
  }

  categories$Suscripcion() {
    this.categories$.subscribe({
      next: (response) => {
        response.forEach((category) => {
          this.TREE_DATA.push(this.convertCategoryToCategoryNode(category));
          this.categories.push(category);
        });
      },
      error: (error) => {
        console.log('treeNavError', error);
      },
      complete: () => {
        this.categoryClick.emit(this.categories[0]);
        this.dataSource.data = this.TREE_DATA;
        console.log('completado, valor de TREE_DATA', this.TREE_DATA);
      },
    });
  }

  hasChild = (_: number, node: CategoryNode) =>
    !!node.children && node.children.length > 0;

  categoryClicked(node: CategoryNode) {
    if (node.categoryNode)
      this.categoryService.setCategorySelectedInNav(node.categoryNode);
  }

  poseClicked(node: CategoryNode) {
    this.categoryService.setPoseSelectedInNavSubject(node.name);
  }
}
