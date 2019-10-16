import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { SearchService } from './search.service';
import { SearchComponentMo } from './search/search.component';


@NgModule({
  declarations: [SearchComponentMo],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path:'search',component:SearchComponentMo}
    ])

  ],
  exports:[
   SearchComponentMo
  ],
  providers:[SearchService]
})
export class SearchModule { }
