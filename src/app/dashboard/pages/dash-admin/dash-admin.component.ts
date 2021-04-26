import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dash-admin',
  templateUrl: './dash-admin.component.html',
  styleUrls: ['./dash-admin.component.scss']
})
export class DashAdminComponent implements OnInit {
  @Output() titulo = 'Dashboard';
  @Output() subtitulo = 'Administrador';
  
  constructor() { }

  ngOnInit(): void {
  }

}
