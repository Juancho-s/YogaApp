import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsanaComponent } from './components/commons/asana/asana.component';

const routes: Routes = [{ path: 'asana', component: AsanaComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
