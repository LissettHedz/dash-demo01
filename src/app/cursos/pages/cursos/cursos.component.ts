import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  @Output() titulo = 'Listado de';
  @Output() subtitulo = 'Cursos';

  constructor() { }

  ngOnInit(): void {
  }

}
