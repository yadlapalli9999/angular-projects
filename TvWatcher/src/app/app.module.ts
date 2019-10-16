import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UiModuleModule } from './UI/ui-module/ui-module.module';
import { CarouselModule } from './carousel/carousel.module';
import {HttpClientModule} from '@angular/common/http';
import { FeaturedModule } from './featured/featured.module';
import { SearchModule } from './search/search.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UiModuleModule,
    CarouselModule,
    FeaturedModule,
    SearchModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
