import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AsanaComponent } from '../../components/commons/asana/asana.component';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SwitchThemeComponent } from '../../components/commons/switch-theme/switch-theme.component';
import { TreeNavComponent } from 'src/app/components/commons/tree-nav/tree-nav.component';
import { AsanaDetailsComponent } from '../../components/commons/asana-details/asana-details.component';

@NgModule({
  declarations: [
    HomeComponent,
    AsanaComponent,
    DashboardComponent,
    SwitchThemeComponent,
    TreeNavComponent,
    AsanaDetailsComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [HomeComponent],
})
export class PagesModule {}
