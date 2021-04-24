import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsSmallComponent } from './cards-small/cards-small.component';



@NgModule({
  declarations: [
    CardsSmallComponent
  ],
  exports: [
    CardsSmallComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
