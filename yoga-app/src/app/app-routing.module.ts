import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsanaComponent } from './components/commons/asana/asana.component';
import { DashboardComponent } from './modules/pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', 
    pathMatch: 'full', 
    redirectTo: 'home'
  },
  { 
    path: 'home', component: DashboardComponent
  },
  { 
    path: 'asana', component: AsanaComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
