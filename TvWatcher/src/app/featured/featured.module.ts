import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedShowComponent } from './featured-show/featured-show.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { FeaturedService } from './featured.service';



@NgModule({
  declarations: [
    FeaturedShowComponent, 
    ShowDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FeaturedShowComponent, 
    ShowDetailsComponent
  ],
  providers:[
    FeaturedService
  ]
})
export class FeaturedModule { }
