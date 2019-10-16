import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {NavComponent} from '../nav/nav.component';
import { SearchComponentBar } from '../search/search.component';
import { FooterComponent } from '../footer/footer.component';



@NgModule({
  declarations: [
    NavComponent,
    SearchComponentBar,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavComponent,
    SearchComponentBar,
    FooterComponent
  ]
})
export class UiModuleModule { }
