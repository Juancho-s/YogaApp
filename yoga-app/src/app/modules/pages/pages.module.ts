import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AsanaComponent } from '../../components/commons/asana/asana.component';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SwitchThemeComponent } from '../../components/commons/switch-theme/switch-theme.component';

@NgModule({
  declarations: [
    HomeComponent,
    AsanaComponent,
    DashboardComponent,
    SwitchThemeComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [HomeComponent],
})
export class PagesModule {}
