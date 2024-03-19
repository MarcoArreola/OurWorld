import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { ImgComponent } from './img/img.component';



@NgModule({
  declarations: [HeaderComponent, CardComponent, ImgComponent],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    CardComponent
  ]
})
export class ComponentsModule { }
