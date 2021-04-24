import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ComponentsModule } from './components/components.module';
import { DashAlumnoComponent } from './pages/dash-alumno/dash-alumno.component';
import { DashAdminComponent } from './pages/dash-admin/dash-admin.component';


@NgModule({
  declarations: [
    DashAdminComponent,
    DashAlumnoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentsModule
  ]
})
export class DashboardModule { }
