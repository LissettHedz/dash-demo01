import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsSmallComponent } from './cards-small/cards-small.component';
import { TitleComponent } from './title/title.component';



@NgModule({
  declarations: [
    CardsSmallComponent,
    TitleComponent
  ],
  exports: [
    CardsSmallComponent,
    TitleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
