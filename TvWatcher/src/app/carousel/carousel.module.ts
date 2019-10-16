import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { CarouselImageComponent } from './carousel-image/carousel-image.component';
import { CarouselContainerComponent } from './carousel-container/carousel-container.component';



@NgModule({
  declarations: [
    CarouselContainerComponent,
    CarouselImageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    CarouselContainerComponent,
    CarouselImageComponent
  ]
})
export class CarouselModule { }
