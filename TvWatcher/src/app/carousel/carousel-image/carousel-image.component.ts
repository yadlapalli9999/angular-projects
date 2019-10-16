import { Component, OnInit, Input } from '@angular/core';
import { Carousel } from '../carousel';

@Component({
  selector: 'app-carousel-image',
  template: `
  <img src="{{ slide.image }}" alt="{{ slide.title }}">
      <div class="carousel-caption">
        <h2>{{ slide.title }}</h2>
      </div>
  `,
  styleUrls: ['./carousel-image.component.css']
})
export class CarouselImageComponent implements OnInit {
@Input() slide:Carousel
  constructor() { }

  ngOnInit() {
  }

}
