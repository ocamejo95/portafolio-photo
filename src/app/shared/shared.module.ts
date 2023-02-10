import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardImgComponent } from './card-img/card-img.component';
import {NgsRevealModule} from "ngx-scrollreveal";



@NgModule({
  declarations: [
    CardImgComponent
  ],
  exports: [
    CardImgComponent
  ],
  imports: [
    CommonModule,
    NgsRevealModule
  ]
})
export class SharedModule { }
