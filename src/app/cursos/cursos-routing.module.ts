import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoComponent } from './pages/curso/curso.component';
import { CursosComponent } from './pages/cursos/cursos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'cursos', component: CursosComponent},
      {path: '**', redirectTo: 'cursos'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
