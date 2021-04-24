import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashAdminComponent } from './pages/dash-admin/dash-admin.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'admin', component: DashAdminComponent},
      {path: '**', redirectTo: 'admin'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
