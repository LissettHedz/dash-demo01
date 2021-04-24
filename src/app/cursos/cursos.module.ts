import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { ComponentsModule } from './components/components.module';
import { CursoDetalleComponent } from './pages/curso-detalle/curso-detalle.component';
import { CursoComponent } from './pages/curso/curso.component';
import { CursosComponent } from './pages/cursos/cursos.component';



@NgModule({
  declarations: [
    CursoComponent,
    CursoDetalleComponent,
    CursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    ComponentsModule
  ]
})
export class CursosModule { }
