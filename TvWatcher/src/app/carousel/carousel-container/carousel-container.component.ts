import { Component, OnInit } from '@angular/core';
import {Carousel} from '../carousel';
import { CarouselService } from '../carousel.service';

@Component({
  selector: 'app-carousel-container',
  templateUrl: './carousel-container.component.html',
  styleUrls: ['./carousel-container.component.css']
})
export class CarouselContainerComponent implements OnInit {
 slides:Carousel[];
  constructor(private carouselService:CarouselService) { }

  ngOnInit() {
    this.getFeatures()
  }
  getFeatures(){
    this.carouselService.getfeatured().subscribe((slides:Carousel[])=>{
      this.slides = slides
      console.log(slides)
    })
  }
}
