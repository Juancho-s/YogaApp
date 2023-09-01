import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AsanaComponent } from '../../components/commons/asana/asana.component';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SwitchThemeComponent } from '../../components/commons/switch-theme/switch-theme.component';
import { TreeNavComponent } from 'src/app/components/commons/tree-nav/tree-nav.component';

@NgModule({
  declarations: [
    HomeComponent,
    AsanaComponent,
    DashboardComponent,
    SwitchThemeComponent,
    TreeNavComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [HomeComponent],
})
export class PagesModule {}
