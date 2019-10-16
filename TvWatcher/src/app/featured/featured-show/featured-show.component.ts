import { Component, OnInit } from '@angular/core';
import { FeaturedService } from '../featured.service';
import { Featured } from '../featured';

@Component({
  selector: 'app-featured-show',
  templateUrl: './featured-show.component.html',
  styleUrls: ['./featured-show.component.css']
})
export class FeaturedShowComponent implements OnInit {
  shows:Featured[];
  constructor(private featuredService:FeaturedService) { }

  ngOnInit() {
    this.getFeaturedShow();
  }
  
  getFeaturedShow(){
    this.featuredService.featuredShows().subscribe((shows:Featured[])=>{
      this.shows = shows
    })
  }
}
