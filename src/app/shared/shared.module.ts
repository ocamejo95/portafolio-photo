import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardImgComponent } from './card-img/card-img.component';



@NgModule({
  declarations: [
    CardImgComponent
  ],
  exports: [
    CardImgComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
